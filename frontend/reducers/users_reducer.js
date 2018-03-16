import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_USER, RECEIVE_USER_SHELVES } from '../actions/user_actions';
import { RECEIVE_SHELF, REMOVE_SHELF } from '../actions/bookshelf_actions';


const UsersReducer = (state = {}, action) =>{
  Object.freeze(state);
  let shelf, newArr;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.user) {
        return merge({}, state, {[action.payload.id]:action.payload});
      }
      return {};
    case RECEIVE_USER:
      return merge({}, state, {[action.payload.id]:action.payload});
    case RECEIVE_USER_SHELVES:
      return merge({}, state, action.payload.user);
    case RECEIVE_SHELF:
    debugger
      shelf = Object.values(action.payload.bookshelves)[0];
      newArr = state[shelf.ownerId].bookshelfIds.slice();
      if (newArr.indexOf(shelf.id) === -1){
        newArr.push(shelf.id);
        return merge({}, state, {[shelf.ownerId]:{bookshelfIds:newArr}});
      } else{
        return state;
      }
    case REMOVE_SHELF:
      const newState = merge({}, state);
      shelf = Object.values(action.payload.bookshelves)[0];
      const idx = newState[shelf.ownerId].bookshelfIds.indexOf(shelf.id);
      newState[shelf.ownerId].bookshelfIds.splice(idx,1);
      return newState;
    default:
     return state;
  }
};

export default UsersReducer;
