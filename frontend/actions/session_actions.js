import * as ApiUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receiveCurrentUser = user =>({
  type:RECEIVE_CURRENT_USER,
  user
});

const receiveSessionErrors = errors =>({
  type:RECEIVE_SESSION_ERRORS,
  errors
});

export const login = user => dispatch =>(
  ApiUtils.login(user)
  .then(recievedUser => dispatch(receiveCurrentUser(recievedUser)
), err => dispatch(receiveSessionErrors(err)))
);

export const signup = user => dispatch =>(
  ApiUtils.signup(user)
  .then(recievedUser => dispatch(receiveCurrentUser(recievedUser)
), err => dispatch(receiveSessionErrors(err)))
);

export const logout = () => dispatch =>(
  ApiUtils.logout()
  .then(recievedUser => dispatch(receiveCurrentUser(null)
), err => dispatch(receiveSessionErrors(err)))
);
