import React from "react";
import BookshelfItem from "./bookshelf_item";
import BookshelfSidebarContainer from "./bookshelf_sidebar_container";

class BookshelfShow extends React.Component {
  componentDidMount() {
    window.scroll(0, 0);
    let allBooksExist = true;
    if (this.props.books) {
      this.props.books.forEach(book => {
        if (!book || !book.currentUserReview) allBooksExist = false;
      });
    }
    if (!(this.props.books && allBooksExist)) {
      this.props.fetchResource();
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.userId !== newProps.match.params.userId) {
      this.props.fetchResource();
    } else if (
      this.props.match.params.shelfId !== newProps.match.params.shelfId
    ) {
      this.props.fetchResource();
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    const {
      books,
      errors,
      shelfTitle,
      updateAverageReview,
      currentUserId,
      userName
    } = this.props;
    let allBooksExist = true;
    if (books) {
      books.forEach(book => {
        if (!book || !book.currentUserReview) allBooksExist = false;
      });
    }

    if (!(books && allBooksExist)) {
      return (
        <div className="bookshelf-show-loading-container">
          <img className="book-show-loading" src={window.loading} />
          {errors.map((error, idx) => (
            <li className="bookshelf-show-error" key={idx}>
              {error}
            </li>
          ))}
        </div>
      );
    }

    return (
      <div className="bookshelf-show">
        {errors.map((error, idx) => (
          <li className="bookshelf-show-error" key={idx}>
            {error}
          </li>
        ))}
        <h2 className="bookshelf-show__title">{`${userName}'s Books: ${shelfTitle}`}</h2>
        <section className="bookshelf-show__body">
          <aside className="bookshelf-show__sidelinks">
            <BookshelfSidebarContainer shelfTitle={shelfTitle} />
          </aside>
          <main>
            <table className="bookshelf-show__table">
              <thead className="bookshelf-show__table__head">
                <tr>
                  <th className="bookshelf-show__table__title">Cover</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Avg Rating</th>
                  <th className="bookshelf-show__table__rating">Rating</th>
                  <th>Shelve</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, idx) => (
                  <BookshelfItem
                    key={idx}
                    book={book}
                    updateAverageReview={updateAverageReview}
                    onCurrentUserShelf={
                      currentUserId === this.props.match.params.userId
                    }
                  />
                ))}
              </tbody>
            </table>
          </main>
        </section>
      </div>
    );
  }
}

export default BookshelfShow;
