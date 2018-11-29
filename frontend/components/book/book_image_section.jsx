import React from "react";
import MiniReviewContainer from "../review/mini_review_container";
import BookShelveContainer from "./book_shelve_container";
import { reviewStats } from "../../util/review_util";

const BookImageItem = ({ coverImage, reviews, passedBookId, callback, feed }) => {

  return (
    <div className="book-image-container book-show__left">
      <div className="book-image__cover-photo">
        <img className={feed} src={coverImage} onClick={callback} />
      </div>
      <div className="book-image__read-status">
        <BookShelveContainer passedBookId={passedBookId} />
      </div>
      <div className="book-image__rating">
        <MiniReviewContainer reviews={reviews} />
      </div>
    </div>
  );
};
export default BookImageItem;
