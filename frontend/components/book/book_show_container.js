import { connect } from 'react-redux';
import { clearErrors } from '../../actions/global_actions';
import BookShow from './book_show';
import { fetchBook } from '../../actions/book_actions';
import { selectReviews } from '../../reducers/selectors';

const msp = (state, ownProps) =>{
  const book = state.entities.books[ownProps.match.params.id];
  return({
    errors: state.errors.books,
    book,
    reviews: selectReviews(state, book)
  });
};

const mdp = dispatch =>{
  return({
    fetchBook: (id) => dispatch(fetchBook(id)),
    clearErrors: () => dispatch(clearErrors()),
  });
};

export default connect(msp, mdp)(BookShow);
