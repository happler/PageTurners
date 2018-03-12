import { merge } from 'lodash';
import { RECEIVE_BOOKS }  from '../actions/book_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW }  from '../actions/review_actions';

const ReviewsReducer = (state = {}, action) =>{
  debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKS:
    case RECEIVE_REVIEW:
      return merge({}, state, action.payload.reviews);
    case REMOVE_REVIEW:
      const newState = merge({}, state);
      delete newState[Object.keys(action.payload.reviews)[0]];
      return newState;
    default:
      return state;
  }
};

export default ReviewsReducer;
