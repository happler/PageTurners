import { connect } from 'react-redux';
import { clearErrors } from '../../actions/global_actions';
import BookshelfShow from './bookshelf_show';
import { fetchShelf, deleteShelf } from '../../actions/bookshelf_actions';
import { selectShelves, selectBooks} from '../../reducers/selectors';


const msp = (state, ownProps) =>{
  const shelf = state.entities.bookshelves[ownProps.match.params.shelfId];
  const user = state.entities.users[ownProps.match.params.user_id];
  return({
    errors: state.errors.bookshelves,
    books: selectBooks(state, shelf),
  });
};

const mdp = dispatch =>{
  return({
    fetchShelf: (id) => dispatch(fetchShelf(id)),
    clearErrors: () => dispatch(clearErrors()),
  });
};

export default connect(msp, mdp)(BookshelfShow);
