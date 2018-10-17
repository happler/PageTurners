import { connect } from "react-redux";
import { shelveBook, unshelveBook } from "../../actions/bookshelf_actions";
import BookShelve from "./book_shelve";

const msp = (state, ownProps) => {
  const usersShelves =
    (state.entities.users[state.session.currentUser.id] &&
      state.entities.users[state.session.currentUser.id].bookshelves) ||
    {};
  return {
    usersShelves,
    passedBookId: ownProps.passedBookId
  };
};

const mdp = dispatch => {
  return {
    shelveBook: (shelfId, bookId) => dispatch(shelveBook(shelfId, bookId)),
    unshelveBook: (shelfId, bookId) => dispatch(unshelveBook(shelfId, bookId))
  };
};

export default connect(msp, mdp)(BookShelve);
