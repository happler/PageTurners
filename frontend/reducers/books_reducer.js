import { merge } from "lodash";
import { RECEIVE_BOOKS } from "../actions/book_actions";
import {
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
  UPDATE_AVERAGE_REVIEW
} from "../actions/review_actions";
import { RECEIVE_SHELF } from "../actions/bookshelf_actions";
import { RECEIVE_USER_SHELVES } from "../actions/user_actions";

const BooksReducer = (state = {}, action) => {
  Object.freeze(state);
  let review, newArr;

  switch (action.type) {
    case RECEIVE_BOOKS:
    case RECEIVE_USER_SHELVES:
    case RECEIVE_SHELF:
      return merge({}, state, action.payload.books);
    case RECEIVE_REVIEW:
      review = Object.values(action.payload.reviews)[0];
      newArr = state[review.bookId]
        ? state[review.bookId].reviewIds.slice()
        : [];
      if (newArr.indexOf(review.id) === -1) {
        newArr.push(review.id);
        return merge({}, state, {
          [review.bookId]: {
            reviewIds: newArr,
            currentUserReview: [review],
            avgReview: action.payload.books.avgReview
          }
        });
      } else {
        return merge({}, state, {
          [action.payload.books.bookId]: {
            avgReview: action.payload.books.avgReview
          }
        });
      }
    case REMOVE_REVIEW:
      const newState = merge({}, state);
      review = Object.values(action.payload.reviews)[0];
      const idx = newState[review.bookId].reviewIds.indexOf(review.id);
      newState[review.bookId].reviewIds.splice(idx, 1);
      newState[review.bookId].avgRating = action.payload.books.avgRating;
      return newState;

    case UPDATE_AVERAGE_REVIEW:
      debugger;
      review = Object.values(
        state[action.payload.bookId].currentUserReview
      ).slice()[0];
      merge(review, { rating: action.payload.updatedRating });
      newArr = [review];

      return merge({}, state, {
        [action.payload.bookId]: {
          avgReview: action.payload.avgRating,
          currentUserReview: newArr
        }
      });
    default:
      return state;
  }
};

export default BooksReducer;
