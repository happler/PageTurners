import { combineReducers } from 'redux';
import BooksReducer from './books_reducer';

const EntitiesReducer = combineReducers({
  books: BooksReducer
});

export default EntitiesReducer;
