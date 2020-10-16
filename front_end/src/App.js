import React, { useState ,Component} from 'react';
import HomePage from './view/HomePage/index';
import SignIn from './view/SignIn/index';
import NotFound from './view/NotFound'
import { Paper,Grid
 } from '@material-ui/core';
import { Switch, Route, BrowserRouter, Link,Redirect } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'
import Order from './view/Order'
import Detail from './view/Detail/index'
import SignInLayout from './layout/SignInLayout'
import DefaultLayout from './layout/Default'
import SignUp from './view/SignUp/index'
import Cookie from 'js-cookie'
import Normal from './layout/Normal'
import User from './layout/User'
import Account from './view/Account/index'
import SignUpLayout from './layout/SignUpLayout'
export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      
      routers:[
        {
          component: HomePage,
          layout: Cookie.get('token') ? Normal:SignIn,
          path: '/',   
          
        },
        {
          component:SignIn,
          layout: SignInLayout,
          path:'/sign-in',
        },
        {
          component: Account,
          layout: User,
          path:'/me'
        },
        {
          component: SignUp,
          layout: SignUpLayout,
          path:'/sign-up'
        }
        , {
          component: Detail,
          layout: DefaultLayout,
          path:'/detail/:id'
        }
      ]
    }
  }
 render(){
  return <BrowserRouter >
  
    <Grid style={{
      display: 'flex', flexDirection: 'column', height: '100%',
      
}}>
    <Grid
        style={{
       
        flexDirection: 'row',
        alignItems: 'stretch',
        flex: 1,
        
      }}>
      <Switch>
          {
            this.state.routers.map(e => (
              <Route exact path = {e.path}>
                <e.layout>
                  <e.component></e.component>
                </e.layout>
               </Route> 
            )            
            )
      }
          <Route exact path ='not-found'>
            {NotFound}
          </Route >
          <Redirect from ='/' to ='/not-found'> </Redirect>
      </Switch>
    </Grid>
    </Grid>
  </BrowserRouter >
}
}
