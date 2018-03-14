import React from 'react';
import { fetchUser } from '../../actions/user_actions';
import { fetchShelf, deleteShelf } from '../../actions/bookshelf_actions';
import { connect } from 'react-redux';
import BookshelfSidebar from './bookshelf_sidebar';



const msp = (state, ownProps) =>{
  const user = state.entities.users[ownProps.match.params.UserId];
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

export default connect(msp, mdp)(BookshelfSidebar);
