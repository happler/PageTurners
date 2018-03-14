import React from 'react';
import { fetchUser } from '../../actions/user_actions';
import { fetchShelf, deleteShelf } from '../../actions/bookshelf_actions';



const msp = (state, ownProps) =>{
  const user = state.entities.users[ownProps.match.params.UserId];
  const userShelves = user.bookshelfIds.map(id =>({
    id,
    title: state.entities.bookshelves[id].title
  })
);
  return({
    userShelves,
  });
};


const mdp = dispatch =>{
  return({
    fetchUser: (id) => dispatch(fetchUser(id)),
  });
};
