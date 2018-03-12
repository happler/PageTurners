import { connect } from 'react-redux';
import React from 'react';
import { clearErrors } from '../../actions/global_actions';
import ReviewForm from './review_form';
import { fetchBook } from '../../actions/book_actions';
import { fetchReview } from '../../actions/review_actions';
import { patchReview } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';


const msp = (state, ownProps) =>{
  const book = state.entities.books[ownProps.match.params.id];
  const review = state.entities.reviews[ownProps.match.params.reviewId];
  const defaultReview = review ? { rating: review.rating, shelf:review.shelf, body:review.body} : { rating: 0, shelf:'', body:''};
  const formType = "Update Review";
  return({
    review: defaultReview,
    book,
    errors: state.errors.reviews,
    formType,
  });
};

const mdp = dispatch =>{
  return({
    submitAction: (review) => dispatch(patchReview(review)),
    clearErrors: () => dispatch(clearErrors()),
    fetchBook: (id) => dispatch(fetchBook(id)),
    fetchReview: (id) => dispatch(fetchReview(id)),
  });
};


class EditReviewForm extends React.Component{

  componentDidMount(){
    this.props.fetchBook(this.props.match.params.id);
    this.props.fetchReview(this.props.match.params.reviewId);
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.params.id !==newProps.match.params.id){
      this.props.fetchBook(newProps.match.params.id);
    }
    if (this.props.match.params.reviewId !==newProps.match.params.reviewId){
      this.props.fetchReview(this.props.match.params.reviewId);
    }
  }

  render(){
    const { review, book, errors, formType, clearErrors, submitAction, fetchBook } = this.props;
    return(
      <ReviewForm
        review={review}
        book={book}
        errors={errors}
        formType={formType}
        clearErrors={clearErrors}
        submitAction={submitAction}
        fetchBook={fetchBook} />
    );
  }
}

export default withRouter(connect(msp, mdp)(EditReviewForm));
