export const selectReviews = (state, book) => {
  return book ? book.reviewIds.map(id => state.entities.reviews[id]) : [];
};

export const userReview = (reviews, userId) => {
  const userReviews = reviews.filter( review => review.userId ===userId);
  return userReviews[0];
};
