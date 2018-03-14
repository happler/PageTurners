import { CLEAR_ALL_ERRORS } from '../actions/global_actions';
import{ RECEIVE_USER_ERRORS, RECEIVE_USER } from '../actions/user_actions';

const UserErrorsReducer = (state = [], action) =>{
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_USER:
    case CLEAR_ALL_ERRORS:
      return [];
    default:
      return state;

  }
};

export default UserErrorsReducer;
