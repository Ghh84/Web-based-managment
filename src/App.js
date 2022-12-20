import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes,Route,Switch } from 'react-router-dom';
//import Home from './components/Home';
import Transaction from './components/transactions/transaction';
import Login from './components/login';
import Logout from './components/logout';
import PrivateRoute from './components/privateRoute'
import PublicRoute from './components/publicRoute'
import Users from './components/users/users'
import Balance from './components/balance/balance'
import Request from './components/Request/request';
import AuthService from './services/auth.service';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute component={Transaction} path='/Transactions' exact />
          <PrivateRoute component={Users} path='/Users' exact />
          <PrivateRoute component={Balance} path='/Balance' exact />
          <PrivateRoute component={Request} path='/Request' exact />
          <PublicRoute component={Login} path='/login' exact/>
          <PublicRoute component={Login} path='/' exact/>
          <PublicRoute component={Logout} path='/Logout' exact/>
        </Switch>
      </Router>
    );
  }
}

export default App;
