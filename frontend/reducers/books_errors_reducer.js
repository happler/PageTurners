import {
  RECEIVE_BOOKS,
  RECEIVE_BOOK_ERRORS,
} from '../actions/book_actions';
import { CLEAR_ALL_ERRORS } from '../actions/global_actions';


const BooksErrorsReducer = (state = [], action) =>{
  debugger;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOK_ERRORS:
    return action.errors.responseJSON;
    case RECEIVE_BOOKS:
      return [];
    case CLEAR_ALL_ERRORS:
      return [];
    default:
      return state;
  }
};

export default BooksErrorsReducer;
