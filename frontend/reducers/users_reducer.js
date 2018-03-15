import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/user_actions';

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
    default:
     return state;
  }
};

export default UsersReducer;
