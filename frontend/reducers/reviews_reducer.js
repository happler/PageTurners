import { merge } from 'lodash';
import { RECEIVE_BOOKS }  from '../actions/book_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW }  from '../actions/book_actions';

const ReviewsReducer = (state = {}, action) =>{
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKS:
    case RECEIVE_REVIEW:
      return merge({}, state, action.payload.reviews);
    case REMOVE_REVIEW:
      const newState = merge({}, state);
      delete newState[action.payload.id];
      return newState;
    default:
      return state;
  }
};

export default ReviewsReducer;
