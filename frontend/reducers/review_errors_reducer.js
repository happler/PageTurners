import {
  RECEIVE_REVIEW_ERRORS,
  RECEIVE_REVIEW
} from '../actions/review_actions';
import { CLEAR_ALL_ERRORS } from '../actions/global_actions';

const ReviewErrorsReducer = (state = [], action) =>{
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_REVIEW:
    case CLEAR_ALL_ERRORS:
      return [];
    default:
    return state;

  }
};

export default ReviewErrorsReducer;
