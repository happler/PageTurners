export const selectReviews = (state, book) => {
  return book ? book.reviewIds.map(id => state.entities.reviews[id]) : [];
};

export const userReview = (reviews, userId) => {
  const userReviews = reviews.filter( review => review.userId === userId || review.user_id === userId);
  return userReviews[0];
};

export const selectShelves = (state, user) =>{
  return user ? user.shelfIds.map(id => state.entities.bookshelves[id]) : [];
};

export const selectBooks = (state, shelf) =>{
  return shelf ? shelf.bookIds.map(id => state.entities.books[id]) : [];
};
