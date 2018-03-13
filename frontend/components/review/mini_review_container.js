import React from 'react';
import { connect } from 'react-redux';
import { postReview, patchReview } from '../../actions/review_actions';
import { userReview } from '../../reducers/selectors';
import MiniReview from './mini_review';


let hasReview;
const msp = (state, ownProps) =>{
  const currentUserReview = userReview(ownProps.reviews, state.session.currentUser.id);
  hasReview = Boolean(currentUserReview);
  const review = currentUserReview || {body:'', rating:0};
  return({
    review,
    errors: state.errors.reviews,
  });
};

const mdp = dispatch =>{
  const submitAction = hasReview ? (review) => dispatch(patchReview(review)) :(review) => dispatch(postReview(review));
  return({
    submitAction
  });
};

export default connect(msp, mdp)(MiniReview);
