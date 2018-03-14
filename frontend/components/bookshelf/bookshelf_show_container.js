import { connect } from 'react-redux';
import { clearErrors } from '../../actions/global_actions';
import BookshelfShow from './bookshelf_show';
import { fetchShelf, deleteShelf } from '../../actions/bookshelf_actions';
import { selectShelves, selectBooks} from '../../reducers/selectors';


const msp = (state, ownProps) =>{
  const shelf = state.entities.bookshelves[ownProps.match.params.shelfId];
  const user = state.entities.users[ownProps.match.params.userId];
  return({
    errors: state.errors.bookshelves,
    shelf,
    books: selectBooks(state, shelf),
    allShelves: selectShelves(state, user),
  });
};

const mdp = dispatch =>{
  return({
    fetchShelf: (id) => dispatch(fetchShelf(id)),
    deleteShelf: (id) => dispatch(deleteShelf(id)),
    clearErrors: () => dispatch(clearErrors()),
  });
};

export default connect(msp, mdp)(BookshelfShow);
