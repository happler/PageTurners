import SessionErrorsReducer from './session_errors_reducer';
import BooksErrorsReducer from './books_errors_reducer';
import ReviewErrorsReducer from './review_errors_reducer';
import BookshelvesErrorsReducer from './bookshelves_errors_reducer';
import UserErrorsReducer from './user_errors_reducer';
import { combineReducers } from 'redux';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  books: BooksErrorsReducer,
  reviews: ReviewErrorsReducer,
  bookshelves: BookshelvesErrorsReducer,
  users: UserErrorsReducer,
});

export default ErrorsReducer;
