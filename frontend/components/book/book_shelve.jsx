import React from "react";
import { withRouter } from "react-router-dom";

class BookShelve extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: "book-shelve__closed", stillHovered: false };
  }

  toggleDropdown(e) {
    if (this.state.dropdown === "book-shelve__closed" && this.state.stillHovered) {
      this.setState({ dropdown: "book-shelve__open" });
    }
  }

  timeoutDropdown(e){
    this.setState({stillHovered: true});
    setTimeout(this.toggleDropdown.bind(this), 500);

  }

  hoverReset(){
    this.setState({stillHovered: false, dropdown: "book-shelve__closed"});
  }
  render() {
    const { usersShelves, shelveBook, unshelveBook, passedBookId } = this.props;

    const shelveIds = Object.keys(usersShelves);
    const shelfItems = shelveIds.map(shelfId => {
      const bookId = passedBookId || this.props.match.params.id;
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
      <section
        className="book-shelve-container"
        onMouseEnter={this.timeoutDropdown.bind(this)}
        onMouseLeave={this.hoverReset.bind(this)}
        >
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
