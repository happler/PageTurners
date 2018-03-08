import { merge } from 'lodash';
import { RECEIVE_BOOKS }  from '../actions/book_actions';

const BooksReducer = (state = {}, action) =>{
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKS:
      return merge({}, state, action.books);
    default:
      return state;
  }
};

export default BooksReducer;
