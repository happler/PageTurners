import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as ShelfActions from './actions/bookshelf_actions';

document.addEventListener("DOMContentLoaded", () =>{
  let store;
  if (window.currentUser){
    const preloadedState = {session:{currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else{
    store = configureStore();
  }
  window.store = store;
  window.BookActions = BookActions;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
