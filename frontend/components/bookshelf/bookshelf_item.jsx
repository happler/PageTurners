import React from "react";
import { Link, withRouter } from "react-router-dom";
import MiniReviewContainer from "../review/mini_review_container";

class BookshelfItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUserReview: props.book.currentUserReview };
  }

  componentDidMount() {
    this.setReviewFlag();
    this.setUpdatedRating();
  }

  updateCurrentUserReview(review) {
    debugger;
    this.setState({ currentUserReview: [review], newReviewFlag: true });
    this.setReviewFlag();
    this.setUpdatedRating();
  }

  setReviewFlag() {
    if (this.state.currentUserReview && this.state.currentUserReview[0]) {
      this.setState({ hadReviewedFlag: true });
    } else {
      this.setState({ hadReviewedFlag: false });
    }
  }

  setUpdatedRating() {
    let updatedRating;

    if (this.state.newReviewFlag) {
      if (this.state.hadReviewedFlag) {
        updatedRating = (
          (this.props.book.avgReview * (this.props.book.reviewCount - 1) +
            this.state.currentUserReview[0].rating) /
          this.props.book.reviewCount
        ).toFixed(2);
      } else {
        updatedRating = (
          (this.props.book.avgReview * this.props.book.reviewCount +
            this.state.currentUserReview[0].rating) /
          (this.props.book.reviewCount + 1)
        ).toFixed(2);
      }
    } else {
      updatedRating = this.props.book.avgReview.toFixed(2);
    }
    this.setState({ updatedRating });
  }

  render() {
    const { book, history } = this.props;
    const { id, title, author, coverImage, avgReview, reviewCount } = book;

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
          {this.state.updatedRating}
        </td>
        <td className="bookshelf-item__mini_review">
          <MiniReviewContainer
            reviews={this.state.currentUserReview}
            bookId={id}
            updateCurrentUserReview={this.updateCurrentUserReview.bind(this)}
          />
        </td>
      </tr>
    );
  }
}

export default withRouter(BookshelfItem);
