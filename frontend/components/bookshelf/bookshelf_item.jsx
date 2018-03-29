import React from "react";
import { Link, withRouter } from "react-router-dom";
import MiniReviewContainer from "../review/mini_review_container";

const BookshelfItem = ({ book, history }) => {
  const {
    id,
    title,
    author,
    coverImage,
    avgReview,
    reviewCount,
    currentUserReview
  } = book;

  const updatedRating = currentUserReview[0]
    ? (
        (avgReview * reviewCount + currentUserReview[0].rating) /
        (reviewCount + 1)
      ).toFixed(2)
    : avgReview.toFixed(2);

  const toBookPage = () => history.push(`/books/${id}`);

  return (
    <tr className="bookshelf-show__table__row">
      <td>
        <img
          onClick={toBookPage}
          className="bookshelf-item__image"
          src={coverImage}
        />
      </td>
      <td onClick={toBookPage} className="bookshelf-item__title">
        {title}
      </td>
      <td className="bookshelf-item__author">{author}</td>
      <td className="bookshelf-item__avgRating">{updatedRating}</td>
      <td className="bookshelf-item__mini_review">
        <MiniReviewContainer reviews={currentUserReview} bookId={id} />
      </td>
    </tr>
  );
};

export default withRouter(BookshelfItem);
