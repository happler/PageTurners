import React from 'react';
import { fetchUser } from '../../actions/user_actions';
import { fetchShelf, deleteShelf } from '../../actions/bookshelf_actions';
import { connect } from 'react-redux';
import BookshelfSidebar from './bookshelf_sidebar';
import { withRouter } from 'react-router-dom';




const msp = (state, ownProps) =>{
  const user = state.entities.users[ownProps.match.params.userId];
  const userShelves = user
    ? user.bookshelfIds.map(id =>({
      id,
      title: state.entities.bookshelves[id].title
    })
  ) : null;
  return({
    userShelves,
    errors: state.errors.users
  });
};


const mdp = dispatch =>{
  return({
    fetchUser: (id) => dispatch(fetchUser(id)),
  });
};

export default withRouter(connect(msp, mdp)(BookshelfSidebar));
