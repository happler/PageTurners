import * as ReviewUtils from '../util/review_api_util';

export const RECIEVE_REVIEW = 'RECIEVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

const receiveReview = payload =>({
  type: RECIEVE_REVIEW,
  payload
});

const removeReview = payload =>({
  type: REMOVE_REVIEW,
  payload
});

 const receiveReviewErrors = errors =>({
   type: RECEIVE_REVIEW_ERRORS,
   errors
 });

 export const postReview = review => dispatch =>(
   ReviewUtils.postReview(review)
   .then(receivedReview => dispatch(receiveReview(receivedReview)
 ),err => dispatch(receiveReviewErrors(err)))
 );

 export const patchReview = review => dispatch =>(
   ReviewUtils.patchReview(review)
   .then(receivedReview => dispatch(receiveReview(receivedReview)
 ),err => dispatch(receiveReviewErrors(err)))
 );

 export const deleteReview = id => dispatch =>(
   ReviewUtils.deleteReview(id)
   .then(_ => dispatch(removeReview(id)
 ),err => dispatch(receiveReviewErrors(err)))
 );
