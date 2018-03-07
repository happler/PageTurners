import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const SessionReducer = (state = {currentUser: null}, action) =>{
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
       return merge({}, state, {currentUser: action.user});
    default:
      return state;
  }
};

export default SessionReducer;
