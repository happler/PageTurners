import * as UserUtils from '../util/user_api_utils';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveUser = payload =>({
  type:RECEIVE_USER,
  payload
});

const receiveUserErrors = errors =>({
  type:RECEIVE_USER_ERRORS,
  errors
});

export const fetchUser = user => dispatch =>{
  return(
  UserUtils.fetchUser(user)
  .then(recievedUser => dispatch(receiveUser(recievedUser)
), err => dispatch(receiveUserErrors(err)))
);};
