import React from "react";
import { connect } from "react-redux";
import { postReview, patchReview } from "../../actions/review_actions";
import { userReview } from "../../reducers/selectors";
import MiniReview from "./mini_review";
import { withRouter } from "react-router-dom";

let hasReview;
const msp = (state, ownProps) => {
  const currentUserReview = userReview(
    ownProps.reviews,
    state.session.currentUser.id
  );
  hasReview = Boolean(currentUserReview);
  const review = currentUserReview || { body: "", rating: 0 };
  const bookId = ownProps.bookId || ownProps.match.params.id;
  return {
    review,
    errors: state.errors.reviews,
    bookId,
    hasReview
  };
};

const mdp = dispatch => {
  return {
    patchReview: review => dispatch(patchReview(review)),
    postReview: review => dispatch(postReview(review))
  };
};

export default withRouter(connect(msp, mdp)(MiniReview));
