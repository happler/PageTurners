import React from 'react';
import BookshelfItem from './bookshelf_item';
import BookshelfSidebarContainer from './bookshelf_sidebar_container';

class BookshelfShow extends React.Component{
  componentDidMount(){
    if (!this.props.shelf){
      this.props.fetchShelf(this.props.match.params.shelfId);
    }
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.params.shelfId !== newProps.match.params.shelfId){
      this.props.fetchShelf(this.props.match.params.shelfId);
    }
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  render(){

    const { books, errors,  } = this.props;
    if (!this.props.shelf){
      return(
      <div className='bookshelf-show-loading-container'>
        <h2 className='bookshelf-show-loading'>Loading...</h2>
          {errors.map((error, idx) => <li
            className='bookshelf-show-error'
            key={ idx }>{error}</li>) }
      </div>
      );
    }

    return(
      <div className='bookshelf-show'>
        {errors.map((error, idx) => <li
          className='bookshelf-show-error'
          key={ idx }>{error}</li>) }
        <h2 className='bookshelf-show__title'>My Books</h2>
        <section className='bookshelf-show__body'>
          <aside className='bookshelf-show__sidelinks'>
            <BookshelfSidebarContainer />
          </aside>
          <main>
            <table className='bookshelf-show__table'>
              <thead>
                <tr>
                  <th>Cover</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Avg Rating</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, idx) => <BookshelfItem key={idx} book={book} />)}
              </tbody>
            </table>
          </main>
        </section>
      </div>
    );
  }
}

export default BookshelfShow;
