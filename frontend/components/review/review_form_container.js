import { connect } from 'react-redux';
import { clearErrors } from '../../actions/global_actions';
import ReviewForm from './review_form';
import { postReview } from '../../actions/review_actions';


const msp = (state, ownProps) =>{
  const book = state.entities.books[ownProps.match.params.id];
  return({
    rating: 0,
    shelf: '',
    body:'',
    coverImage: book.coverImage,
    title: book.title,
    author:book.author,
    errors: state.errors.reviews
  });
};

const mdp = dispatch =>{
  return({
    submitAction: (review) => dispatch(postReview(review)),
    clearErrors: () => dispatch(clearErrors()),
  });
};


export default connect(msp, mdp)(ReviewForm);
