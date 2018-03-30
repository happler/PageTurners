import React from "react";
import { withRouter } from "react-router-dom";

class BookShelve extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: "closed" };
  }

  toggleDropdown(e) {
    if (this.state.dropdown === "open") {
      this.setState({ dropdown: "closed" });
    } else {
      this.setState({ dropdown: "open" });
    }
  }
  render() {
    const { usersShelves, shelveBook, unshelveBook } = this.props;

    const shelveIds = Object.keys(usersShelves);
    const shelfItems = shelveIds.map(shelfId => {
      const bookId = this.props.match.params.id;
      return (
        <div className="book-shelve__item">
          <p className="book-shelve__item__title">
            {usersShelves[shelfId].title}
          </p>
          {usersShelves[shelfId].bookIds.includes(bookId) ? (
            <span onClick={() => unshelveBook(shelfId, bookId)}>
              Add to Shelf
            </span>
          ) : (
            <span onClick={() => shelveBook(shelfId, bookId)}>
              Remove From Shelf
            </span>
          )}
        </div>
      );
    });
    return (
      <section className="book-shelve-container">
        <div onClick={this.toggleDropdown.bind(this)}>Add To Shelves</div>
        <div className={this.state.dropdown}>{shelfItems}</div>
      </section>
    );
  }
}

export default withRouter(BookShelve);
