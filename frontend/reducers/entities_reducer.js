import { combineReducers } from 'redux';
import BooksReducer from './books_reducer';
import ReviewsReducer from './reviews_reducer';
import BookshelvesReducer from './bookshelves_reducer';
import UsersReducer from './users_reducer';

const EntitiesReducer = combineReducers({
  books: BooksReducer,
  reviews: ReviewsReducer,
  bookshelves: BookshelvesReducer,
  users: UsersReducer,
});

export default EntitiesReducer;
