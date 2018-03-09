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
import { AuthRoute, ProtectedRoute, ConRoute } from '../util/route_util';
import HeaderContainer from './nav/header';
import BookShowContainer from './book/book_show_container';
import Headers from './headers';
import LandingContainer from './landing/landing_container';

const App = () =>(
  <div>
    <ConRoute exact path='/' FalseComp={ LandingContainer } TrueComp={ Headers } />
    <AuthRoute exact path='/login' component={ LoginFormContainer } />
    <AuthRoute exact path='/signup' component={ SignupFormContainer } />
  </div>
);

export default App;


// <ProtectedRoute path='/' component={ Headers } />
