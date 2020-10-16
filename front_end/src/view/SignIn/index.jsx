import React, { Component  } from 'react'
import { Paper, withStyles, Grid,
    TextField, Button, Card
    ,CardHeader,CardContent,CardActions, Link as Direct,
     FormControlLabel, Checkbox, Dialog, Modal, Typography, Drawer } 
     from '@material-ui/core';
     import CircularProgress from '@material-ui/core/CircularProgress';
 import {Link , Redirect} from 'react-router-dom'    
 import { DialerSip, Face, Fingerprint,Lock } from '@material-ui/icons'
 import api from '../../api';
 import Cookie from 'js-cookie'
 import axios from 'axios';
 import {BrowserHistory, createBrowserHistory} from 'history'

export default class SignIn extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            sign: false, 
            login:false,
            token:Cookie.get('token'),
            username:'',
            password:'',
           
        }
        this.history = createBrowserHistory();
    }
    handleSignIn = async() =>{
       try{     
        const data = await api.auth.logIn({
        username : this.state.username,
          password: this.state.password
        
    })
       Cookie.set('token',data.data.token,{expires:365})   
        await this.setState({
           login:true,         
       })
      if(data.status){
        alert("login seccess!")  
        window.location="/"
      }     
      }catch(err){
          console.log(err);
          console.log('user is not exists');      
      } 
    }
    handleSignUp =  () => {
       window.location='/sign-up'
    }
  handleChange = (e) => {
    this.setState({
     [e.target.name]:e.target.value
    }) 
  }
      
    
    render() {
       
        if(this.state.login){
            return <div>
                {}
            </div>
        } 
        const { classes } = this.props;
        return (     
          <div style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column', 
          }} >
            
        <CardHeader title="Đăng nhập"></CardHeader>
        <CardContent   style={{
          display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
           flexDirection: 'column',
        
        }}>
          <TextField
                label="Tài khoản"
                name="username"
                onChange={this.handleChange}
            //
          ></TextField>
          <TextField
            label="Mật khẩu"
            name="password"
            onChange={this.handleChange}
            type="password"
          ></TextField>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSignIn}
          >Đăng nhập</Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleSignUp}
          >Đăng ký</Button>
        </CardActions>
      </div>
      
        
        );
    }
}
