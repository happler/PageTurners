import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import LoginFormContainer from './user/login_form_container';
import SignupFormContainer from './user/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './nav/header';

const App = () =>(
  <div>
    <h2>Hello World</h2>
    <AuthRoute exact path='/login' component={ LoginFormContainer } />
    <AuthRoute exact path='/signup' component={ SignupFormContainer } />
    <ProtectedRoute path='/' component={ HeaderContainer } />
  </div>
);

export default App;
