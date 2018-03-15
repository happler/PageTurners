import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_USER, RECEIVE_USER_SHELVES } from '../actions/user_actions';


const UsersReducer = (state = {}, action) =>{
  Object.freeze(state);
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
    default:
     return state;
  }
};

export default UsersReducer;
