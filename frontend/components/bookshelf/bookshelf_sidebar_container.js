import React from 'react';
import { fetchUser } from '../../actions/user_actions';
import { fetchShelf, deleteShelf, postShelf } from '../../actions/bookshelf_actions';
import { connect } from 'react-redux';
import BookshelfSidebar from './bookshelf_sidebar';
import { withRouter } from 'react-router-dom';
import { selectShelves } from '../../reducers/selectors';





const msp = (state, ownProps) =>{
  const user = state.entities.users[ownProps.match.params.userId];
  const currentUsersPage = (ownProps.match.params.userId == state.session.currentUser.id)
  const userShelves = selectShelves(state, user);
  return({
    userShelves,
    errors: state.errors.users,
    currentUsersPage,
    shelfTitle: ownProps.shelfTitle
  });
};


const mdp = dispatch =>{
  return({
    fetchUser: (id) => dispatch(fetchUser(id)),
    deleteShelf:(id) => dispatch(deleteShelf(id)),
    postShelf:(shelf) => dispatch(postShelf(shelf)),
  });
};

export default withRouter(connect(msp, mdp)(BookshelfSidebar));
