import { connect } from 'react-redux';
import { clearErrors } from '../../actions/global_actions';
import BookshelfIndex from './bookshelf_index';
import { fetchUser } from '../../actions/bookshelf_actions';
import { selectShelves, selectBooks} from '../../reducers/selectors';


const msp = (state, ownProps) =>{
  const user = state.entities.users[ownProps.match.params.user_id];
  const allShelves = selectShelves(state, user);
  const books =  allShelves ? allShelves.map (shelf => selectBooks(state, shelf)).flatten() : null;
  return({
    errors: state.errors.bookshelves,
    books,
  });
};

const mdp = dispatch =>{
  return({
    fetchUser: (id) => dispatch(fetchUser(id)),
    clearErrors: () => dispatch(clearErrors()),
  });
};

export default connect(msp, mdp)(BookshelfIndex);
