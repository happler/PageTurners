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
import BookShowContainer from './book/book_show_container';

const App = () =>(
  <div>
    <AuthRoute exact path='/login' component={ LoginFormContainer } />
    <AuthRoute exact path='/signup' component={ SignupFormContainer } />
    <ProtectedRoute exact path='/' component={ HeaderContainer } />
    <ProtectedRoute path='/books/:id' component={ BookShowContainer } />
  </div>
);

export default App;
