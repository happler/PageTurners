import { connect } from 'react-redux';
import { clearErrors } from '../../actions/global_actions';
import BookShow from './book_show';
import { fetchBook } from '../../actions/book_actions';
import { deleteReview } from '../../actions/review_actions';
import { selectReviews } from '../../reducers/selectors';

const msp = (state, ownProps) =>{
  const bookTemp = state.entities.books[ownProps.match.params.id];
  const book = bookTemp && bookTemp.originalTitle ? bookTemp : null;
  const reviews = selectReviews(state, book).reverse();
  return({
    errors: state.errors.books,
    book,
    reviews,
    currentUserId: state.session.currentUser.id,
  });
};

const mdp = dispatch =>{
  return({
    fetchBook: (id) => dispatch(fetchBook(id)),
    clearErrors: () => dispatch(clearErrors()),
    deleteReview: (id) =>dispatch(deleteReview(id)),
  });
};

export default connect(msp, mdp)(BookShow);
