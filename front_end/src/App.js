import React, { useState } from 'react';
import HomePage from './view/HomePage';
import SignIn from './view/SignIn';
import NotFound from './view/NotFound'

import { Paper, Button } from '@material-ui/core';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import Category from './view/SideBar'
import Order from './view/Order'
import Detail from './view/Detail'

function App(props) {
  return <BrowserRouter>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        flex: 1
      }}>
      <Paper style={{ padding: 24, display: 'flex', flexDirection: 'column' }}>

        <Link to="/" >
          <Button>Trang chủ</Button>
        </Link>
        <Link to="/sign-in">
          <Button>Đăng nhập</Button>
        </Link>
        <Category></Category>
      </Paper>
      <Switch>
        <Route
          component={HomePage}
          exact path="/"
        />
        <Route
          component={Order}
          exact path="/order"
        />
        <Route component={Detail}
          exact path="/detail"></Route>
        <Route
          component={SignIn}
          exact path="/sign-in"
        />
        <Route
          component={NotFound}
          path="/"
        />
      </Switch>
    </div>
  </BrowserRouter >
}

export default App;