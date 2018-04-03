import * as ReviewUtils from "../util/review_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const UPDATE_AVERAGE_REVIEW = "UPDATE_AVERAGE_REVIEW";

const receiveReview = payload => ({
  type: RECEIVE_REVIEW,
  payload
});

const removeReview = payload => ({
  type: REMOVE_REVIEW,
  payload
});

const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const updateAverageReview = payload => ({
  type: UPDATE_AVERAGE_REVIEW,
  payload
});

export const fetchReview = id => dispatch =>
  ReviewUtils.fetchReview(id).then(
    receivedReview => dispatch(receiveReview(receivedReview)),
    err => dispatch(receiveReviewErrors(err))
  );

export const postReview = review => dispatch =>
  ReviewUtils.postReview(review).then(
    receivedReview => dispatch(receiveReview(receivedReview)),
    err => dispatch(receiveReviewErrors(err))
  );

export const patchReview = review => dispatch =>
  ReviewUtils.patchReview(review).then(
    receivedReview => dispatch(receiveReview(receivedReview)),
    err => dispatch(receiveReviewErrors(err))
  );

export const deleteReview = id => dispatch => {
  return ReviewUtils.deleteReview(id).then(
    deletedReview => dispatch(removeReview(deletedReview)),
    err => dispatch(receiveReviewErrors(err))
  );
};
