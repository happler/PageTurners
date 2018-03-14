import React from 'react';
import BookshelfItem from './bookshelf_item';

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

    const { books, errors } = this.props;
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
        <h2 className='bookshelf-show-title'>My Books</h2>
        <section>
          <aside>
            <p>Bookshelf links will go here!</p>
          </aside>
          <main>
            <table>
              <thead>
                <tr>
                  <th>cover</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Avg Rating</th>
                  <th>Rating</th>
                  <th>Shelve(s)</th>
                </tr>
              </thead>
              <tbody>
                {books.map(book => <BookshelfItem book={book} />)}
              </tbody>
            </table>
          </main>
        </section>
      </div>
    );
  }
}
