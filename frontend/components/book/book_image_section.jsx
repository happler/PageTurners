import React from "react";
import MiniReviewContainer from "../review/mini_review_container";

const BookImageItem = ({ coverImage, reviews }) => {
  let reviewCount = 0.0001;
  let total = 0;

  reviews.forEach(review => {
    reviewCount++;
    total += review.rating;
  });
  const average = total / reviewCount;

  return (
    <div className="book-image-container book-show__left">
      <div className="book-image__cover-photo">
        <img src={coverImage} />
      </div>
      <div className="book-image__read-status">
        <p>Reading shelf placeHolder</p>
      </div>
      <div className="book-image__rating">
        <MiniReviewContainer reviews={reviews} />
      </div>
    </div>
  );
};
// change for git to see
export default BookImageItem;
