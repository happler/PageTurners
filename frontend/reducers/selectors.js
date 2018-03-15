export const selectReviews = (state, book) => {
  return book ? book.reviewIds.map(id => state.entities.reviews[id]) : [];
};

export const userReview = (reviews, user_id) => {
  const userReviews = reviews.filter( review => review.user_id === user_id );
  return userReviews[0];
};

export const selectShelves = (state, user) =>{
  return user ? user.bookshelfIds.map(id => state.entities.bookshelves[id]) : null;
};

export const selectBooks = (state, shelf) =>{
  return shelf ? shelf.bookIds.map(id => state.entities.books[id]) : null;
};
