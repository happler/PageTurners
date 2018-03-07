import { merge } from 'lodash';
import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { CLEAR_ALL_ERRORS } from '../actions/global_actions';

const SessionErrorsReducer = (state = [], action) =>{
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
        return action.errors.responseJSON;
    case RECEIVE_CURRENT_USER:
        return [];
    case CLEAR_ALL_ERRORS:
        return [];
    default:
       return state;
  }
};

export default SessionErrorsReducer;
