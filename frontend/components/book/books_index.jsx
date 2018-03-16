import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBooks } from '../../actions/book_actions';
import { clearErrors } from '../../actions/global_actions';

class BooksIndex extends React.Component {

  componentDidMount(){
    window.scroll(0, 0);
      this.props.fetchBooks();
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  render () {
    if (!this.props.books){
      return(
        <div className='books-index-loading-container'>
          <h2 className='books-index-loading'>Loading...</h2>
        </div>
      );
    }
    return(
      <div className='totally-not-just-for-centering'>
        <div className='books-index-container'>
          {this.props.books.map((book, idx) =>(
            <div className='books-index__item' key={idx} onClick={() => this.props.history.push(`/books/${book.id}`)}>
              <img className='books-index__cover' src={book.coverImage} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const msp = state =>{
  return({
    books: Object.values(state.entities.books),
  });
};

const mdp = dispatch =>{
  return({
    fetchBooks: () => dispatch(fetchBooks()),
    clearErrors: () => dispatch(clearErrors()),
  });
};

export default connect(msp, mdp)(withRouter(BooksIndex));




// <p className='books-index__title' >{book.title}</p>
// <p className='books-index__author' >{book.author}</p>
