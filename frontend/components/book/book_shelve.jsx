import React from "react";
import { withRouter } from "react-router-dom";

class BookShelve extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: "book-shelve__closed" };
  }

  toggleDropdown(e) {
    if (this.state.dropdown === "book-shelve__open") {
      this.setState({ dropdown: "book-shelve__closed" });
    } else {
      this.setState({ dropdown: "book-shelve__open" });
    }
  }
  render() {
    const { usersShelves, shelveBook, unshelveBook } = this.props;

    const shelveIds = Object.keys(usersShelves);
    const shelfItems = shelveIds.map(shelfId => {
      const bookId = this.props.match.params.id;
      return (
        <div key={shelfId} className="book-shelve__item">
          <p className="book-shelve__item__title">
            {usersShelves[shelfId].title}
          </p>
          {usersShelves[shelfId].bookIds.includes(Number(bookId)) ? (
            <p
              onClick={() => unshelveBook(shelfId, bookId)}
              className="book-shelve__remove"
            >
              (Remove)
            </p>
          ) : (
            <p
              onClick={() => shelveBook(shelfId, bookId)}
              className="book-shelve__add"
            >
              (Add)
            </p>
          )}
        </div>
      );
    });
    return (
      <section className="book-shelve-container">
        <div
          className="book-shelve__dropdown__toggle"
          onClick={this.toggleDropdown.bind(this)}
        >
          Add To Shelves
        </div>
        <div className={this.state.dropdown}>{shelfItems}</div>
      </section>
    );
  }
}

export default withRouter(BookShelve);
