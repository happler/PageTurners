import { merge } from 'lodash';
import {
  RECEIVE_SHELF,
  REMOVE_SHELF,
  RECEIVE_SHELVING,
  REMOVE_SHELVING,
} from '../actions/bookshelf_actions';

const BookshelvesReducer = (state = {}, action) =>{
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SHELF:
      return merge({}, state, action.payload.bookshelves);
    case REMOVE_SHELF:
      newState = merge({}, state);
      delete newState[Object.keys(action.payload.bookshelves)[0]];
      return newState;
    case RECEIVE_SHELVING:
      const newArr = state[action.payload.bookshelfId].bookIds;
      if (newArr.indexOf(action.payload.bookId) === -1){
        newArr.push(action.payload.bookId);
        return merge({}, state, {[action.payload.bookshelfId]:{bookIds:newArr}});
      } else{
        return state;
      }
    case REMOVE_SHELVING:
      newState = merge({}, state);
      const idx = newState[action.payload.bookshelfId].bookIds.indexOf(action.payload.bookId);
      newState[action.payload.bookshelfId].bookIds.splice(idx, 1);
      return newState;
    default:
      return state;

  }
};

export default BookshelvesReducer;