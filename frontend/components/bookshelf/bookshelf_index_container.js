import { connect } from 'react-redux';
import { clearErrors } from '../../actions/global_actions';
import BookshelfShow from './bookshelf_show';
import { fetchUserShelves } from '../../actions/user_actions';
import { selectShelves, selectBooks} from '../../reducers/selectors';

Array.prototype.flatten = function () {
  let result = [];
  for( let i = 0; i < this.length; i++){
    if( this[i] instanceof Array){
      result = result.concat( this[i].flatten());
    }
    else result.push(this[i]);
  }
  return result;
};


let toFetch;
const msp = (state, ownProps) =>{
  const user = state.entities.users[ownProps.match.params.userId];
  const allShelves = selectShelves(state, user);
  const booksArr =  allShelves ? allShelves.map(shelf => selectBooks(state, shelf)) : null;
  const books = booksArr ? booksArr.flatten() : null;
  toFetch = ownProps.match.params.userId;
  return({
    errors: state.errors.bookshelves,
    books,
    shelfTitle:"All Books"

  });
};


// 'It is mounting, doing the fetch, then not re-rendering after the fetch is performed...why...when I make that fetch, I'm not returning the user too
// '
const mdp = dispatch =>{
  return({
    fetchResource: () => dispatch(fetchUserShelves(toFetch)),
    clearErrors: () => dispatch(clearErrors()),
  });
};

export default connect(msp, mdp)(BookshelfShow);
