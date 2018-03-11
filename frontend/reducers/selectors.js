export const selectReviews = (state, book) => {
  return book ? book.reviewIds.map(id => state.entities.reviews[id]) : [];
};
