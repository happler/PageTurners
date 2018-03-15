import * as UserUtils from '../util/user_api_utils';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_SHELVES = 'RECEIVE_USER_SHELVES';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveUser = payload =>({
  type:RECEIVE_USER,
  payload
});

const receiveUserShelves = payload =>({
  type:RECEIVE_USER_SHELVES,
  payload
});

const receiveUserErrors = errors =>({
  type:RECEIVE_USER_ERRORS,
  errors
});

export const fetchUser = userId => dispatch =>{
  return(
    UserUtils.fetchUser(userId)
    .then(recievedUser => dispatch(receiveUser(recievedUser)
    ), err => dispatch(receiveUserErrors(err)))
  );
};

export const fetchUserShelves = userId => dispatch =>{
  return(
    UserUtils.fetchUserShelves(userId)
    .then(recievedShelves => dispatch(receiveUserShelves(recievedShelves)
    ), err => dispatch(receiveUserErrors(err)))
  );
};
