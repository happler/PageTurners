import React from "react";
import { Link, withRouter } from "react-router-dom";
import MiniReviewContainer from "../review/mini_review_container";
import BookShelveContainer from "../book/book_shelve_container";

class BookshelfItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { book, history, onCurrentUserShelf } = this.props;
    const {
      id,
      title,
      author,
      coverImage,
      avgReview,
      reviewCount,
      currentUserReview
    } = book;

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
        <td className="bookshelf-item__avgRating">
          {Number(avgReview).toFixed(2)}
        </td>
        <td className="bookshelf-item__mini_review">
          <MiniReviewContainer reviews={currentUserReview} bookId={id} />
        </td>
        <td>
          <BookShelveContainer passedBookId={id} />
        </td>
      </tr>
    );
  }
}

export default withRouter(BookshelfItem);
