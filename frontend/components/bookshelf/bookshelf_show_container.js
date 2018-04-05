import { connect } from "react-redux";
import { clearErrors } from "../../actions/global_actions";
import BookshelfShow from "./bookshelf_show";
import { fetchShelf, deleteShelf } from "../../actions/bookshelf_actions";
import { selectShelves, selectBooks } from "../../reducers/selectors";
import { updateAverageReview } from "../../actions/review_actions";
import { fetchUserShelves } from "../../actions/user_actions";

let toFetch, userId;

const msp = (state, ownProps) => {
  const shelf = state.entities.bookshelves[ownProps.match.params.shelfId];
  userId = ownProps.match.params.userId;
  const user = state.entities.users[userId];
  toFetch = ownProps.match.params.shelfId;

  const shelfTitle = shelf ? shelf.title : null;
  return {
    errors: state.errors.bookshelves,
    books: selectBooks(state, shelf),
    shelfTitle,
    currentUserId: state.session.currentUser.id
  };
};

const mdp = dispatch => {
  return {
    fetchResource: () =>
      dispatch(fetchUserShelves(userId)).then(() =>
        dispatch(fetchShelf(toFetch))
      ),
    clearErrors: () => dispatch(clearErrors()),
    updateAverageReview: review => dispatch(updateAverageReview(review))
  };
};

export default connect(msp, mdp)(BookshelfShow);
