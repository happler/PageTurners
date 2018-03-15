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
import ReviewFormContainer from './review/review_form_container';
import EditReviewFormContainer from './review/edit_review_form_container';
import BookshelfShowContainer from './bookshelf/bookshelf_show_container';
import BookshelfIndexContainer from './bookshelf/bookshelf_index_container';
import Header from './nav/header';

const Headers = () =>(
  <div className='content-page-container'>
    <Header />
    <Switch>
      <ProtectedRoute path='/users/:userId/shelf/:shelfId' component={BookshelfShowContainer} />
      <ProtectedRoute path='/users/:userId/shelf' component={BookshelfIndexContainer} />
      <ProtectedRoute path='/books/:id/addReview/:reviewId' component={ EditReviewFormContainer } />
      <ProtectedRoute path='/books/:id/addReview' component={ ReviewFormContainer } />
      <ProtectedRoute path='/books/:id' component={ BookShowContainer } />
    </Switch>
  </div>
);

export default Headers;
