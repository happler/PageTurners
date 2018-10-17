import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchBooks } from "../../actions/book_actions";
import { clearErrors } from "../../actions/global_actions";
import BookFeedItem from "./book_feed_item";

class BookFeedIndex extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      isLoading: true
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    this.props.fetchBooks().then(() => this.setState({isLoading:false}));
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    debugger
    if (this.state.isLoading) {
      return (
        <div className="books-index-loading-container">
          <img className="book-show-loading" src={window.loading} />
        </div>
      );
    }
    return (
      <div>
      {this.props.books.map(book =>(
        <BookFeedItem key={book.id} book={book} />
      ))}
    </div>
  );
}
}

const msp = state => {
  return {
    books: Object.values(state.entities.books)
  };
};

const mdp = dispatch => {
  return {
    fetchBooks: () => dispatch(fetchBooks()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(BookFeedIndex);
