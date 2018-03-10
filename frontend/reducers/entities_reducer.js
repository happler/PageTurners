import { combineReducers } from 'redux';
import BooksReducer from './books_reducer';
import ReviewsReducer from './reviews_reducer';

const EntitiesReducer = combineReducers({
  books: BooksReducer,
  reviews: ReviewsReducer,
});

export default EntitiesReducer;
