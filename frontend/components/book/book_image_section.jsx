import React from "react";
import MiniReviewContainer from "../review/mini_review_container";
import BookShelveContainer from "./book_shelve_container";
import { reviewStats } from "../../util/review_util";

const BookImageItem = ({ coverImage, reviews }) => {

  return (
    <div className="book-image-container book-show__left">
      <div className="book-image__cover-photo">
        <img src={coverImage} />
      </div>
      <div className="book-image__read-status">
        <BookShelveContainer />
      </div>
      <div className="book-image__rating">
        <MiniReviewContainer reviews={reviews} />
      </div>
    </div>
  );
};
export default BookImageItem;
