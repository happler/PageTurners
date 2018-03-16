import { connect } from 'react-redux';
import { clearErrors } from '../../actions/global_actions';
import BookshelfShow from './bookshelf_show';
import { fetchShelf, deleteShelf } from '../../actions/bookshelf_actions';
import { selectShelves, selectBooks} from '../../reducers/selectors';

let toFetch;

const msp = (state, ownProps) =>{
  const shelf = state.entities.bookshelves[ownProps.match.params.shelfId];
  const user = state.entities.users[ownProps.match.params.user_id];
  toFetch = ownProps.match.params.shelfId;
  const shelfTitle = shelf ? shelf.title : null;
  return({
    errors: state.errors.bookshelves,
    books: selectBooks(state, shelf),
    shelfTitle,
  });
};

const mdp = dispatch =>{
  return({
    fetchResource: () => dispatch(fetchShelf(toFetch)),
    clearErrors: () => dispatch(clearErrors()),
  });
};

export default connect(msp, mdp)(BookshelfShow);
