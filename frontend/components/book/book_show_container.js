import { connect } from 'react-redux';
import { clearErrors } from '../../actions/global_actions';
import { BookShow } from './book_show';
import { fetchBook } from '../../actions/book_actions';

const msp = (state, ownProps) =>{
  return({
    errors: state.errors.books,
    book: state.entities.books[ownProps.match.path.params.id]
  });
};

const mdp = dispatch =>{
  return({
    fetchBook: (id) => dispatch(fetchBook(id)),
    clearErrors: () => dispatch(clearErrors()),
  });
};

export default connect(msp, mdp)(BookShow);
