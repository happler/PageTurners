import React from "react";
import { Link, withRouter } from "react-router-dom";
import MiniReviewContainer from "../review/mini_review_container";

class BookshelfItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserReview: props.book.currentUserReview
    };
  }

  componentDidMount() {
    this.setReviewFlag();
    // this.setState({ avgRating: this.props.books.avgRating });
  }

  updateCurrentUserReview(review) {
    this.setState(
      { currentUserReview: [review], newReviewFlag: true },
      this.updateCallback.bind(this)
    );
  }
  // componentDidUpdate() {
  //   debugger;
  //   this.setReviewFlag();
  //   this.setUpdatedRating();
  // }

  updateCallback() {
    debugger;
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
    debugger;
    let updatedAvgRating;
    if (this.state.newReviewFlag) {
      if (this.state.hadReviewedFlag) {
        updatedAvgRating = (
          (this.props.book.avgReview * this.props.book.reviewCount -
            this.props.book.currentUserReview[0].rating +
            this.state.currentUserReview[0].rating) /
          this.props.book.reviewCount
        ).toFixed(2);
      } else {
        updatedAvgRating = (
          (this.props.book.avgReview * this.props.book.reviewCount +
            this.state.currentUserReview[0].rating) /
          (this.props.book.reviewCount + 1)
        ).toFixed(2);
      }
    } else {
      updatedAvgRating = this.props.book.avgReview.toFixed(2);
    }
    debugger;
    this.props.updateAverageReview({
      avgRating: updatedAvgRating,
      bookId: this.props.book.id,
      updatedRating: this.state.currentUserReview[0].rating
    });
    this.setState({ avgRating: updatedAvgRating });
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
          {Number(avgReview).toFixed(2)}
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
