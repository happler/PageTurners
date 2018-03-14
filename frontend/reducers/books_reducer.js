import { merge } from 'lodash';
import { RECEIVE_BOOKS }  from '../actions/book_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW }  from '../actions/review_actions';
import { RECEIVE_SHELF } from '../actions/bookshelf_actions';


const BooksReducer = (state = {}, action) =>{
  Object.freeze(state);
  let review;
  let newArr;
  switch (action.type) {
    case RECEIVE_BOOKS:
      return merge({}, state, action.payload.books);
    case RECEIVE_SHELF:
      return merge({}, state, action.payload.books);
    case RECEIVE_REVIEW:
      review =Object.values(action.payload.reviews)[0];
      newArr = state[review.bookId].reviewIds.slice();
      if (newArr.indexOf(review.id) === -1){
        newArr.push(review.id);
        return merge({}, state, {[review.bookId]:{reviewIds:newArr}});
      } else{
        return state;
      }
    case REMOVE_REVIEW:
      const newState = merge({}, state);
      review = Object.values(action.payload.reviews)[0];
      const idx = newState[review.bookId].reviewIds.indexOf(review.id);
      newState[review.bookId].reviewIds.splice(idx,1);
      return newState;
    default:
      return state;
  }
};

export default BooksReducer;
