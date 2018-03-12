import { connect } from 'react-redux';
import { clearErrors } from '../../actions/global_actions';
import ReviewForm from './review_form';
import { fetchBook } from '../../actions/book_actions';
import { postReview } from '../../actions/review_actions';


const msp = (state, ownProps) =>{
  const book = state.entities.books[ownProps.match.params.id];
  const defaultReview = { rating: 0, shelf:'', body:''};
  const formType = "Add Review";
  return({
    review: defaultReview,
    book,
    errors: state.errors.reviews,
    formType,
  });
};

const mdp = dispatch =>{
  return({
    submitAction: (review) => dispatch(postReview(review)),
    clearErrors: () => dispatch(clearErrors()),
    fetchBook: (id) => dispatch(fetchBook(id)),
  });
};


export default connect(msp, mdp)(ReviewForm);
