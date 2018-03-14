import { combineReducers } from 'redux';
import BooksReducer from './books_reducer';
import ReviewsReducer from './reviews_reducer';
import BookshelvesReducer from './bookshelves_reducer';

const EntitiesReducer = combineReducers({
  books: BooksReducer,
  reviews: ReviewsReducer,
  bookshelves: BookshelvesReducer,
});

export default EntitiesReducer;
