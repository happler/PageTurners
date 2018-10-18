import React from "react";
import { withRouter, Link } from "react-router-dom";
import BookImageItem from "./book_image_section";
import BookTitleItem from "./book_title_item";
import BookSynopsisItem from "./book_synopsis_item";
import { selectReviews } from '../../reducers/selectors';
import { connect } from "react-redux";




const BookFeedItem = ({book, reviews, history}) => {

  const {title, author, coverImage, synopsis, id} = book;
  return(
    <div className="book-show-container book-feed-item">
    <BookImageItem
      coverImage={coverImage}
      reviews={reviews}
      passedBookId={id}
      feed={'feed'}
      callback={() => history.push(`/books/${id}`)}
      />
    <div className="book-show__right">
      <BookTitleItem
        title={title}
        author={author}
        reviews={reviews}
        feed={'feed'}
        callback={() => history.push(`/books/${id}`)}
      />
    <BookSynopsisItem synopsis={synopsis} feed={'feed'} />
    </div>
    </div>
  );

};

const msp = (state, ownProps) =>{
  const reviews = selectReviews(state, ownProps.book).reverse();
  return({
    errors: state.errors.books,
    book: ownProps.book,
    reviews
  });

};

export default connect(msp, null)(withRouter(BookFeedItem));