import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BookshelfSidebar extends React.Component{
  constructor(props){
    super(props);
    this.state={title:''};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.destroy = this.destroy.bind(this);
  }

  componentDidMount(){
    if(!this.props.userShelves){
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  update(e){
    this.setState({title:e.currentTarget.value});
  }

  destroy(id){
    return e => this.props.deleteShelf(id).then(() => this.props.match.params.userId == id ? this.props.history.push(`/users/${this.props.match.params.userId}/shelf`) : null);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.postShelf(this.state).then(() => this.setState({title:''}) );
  }

  render(){
    const shelfLinks = this.props.userShelves.map((shelf, idx) => (
      <div className='bookshelf-sidebar__item' key={idx}>
        {shelf.title === this.props.shelfTitle ? <Link className='bookshelf-sidebar__item__link__current' to={`/users/${this.props.match.params.userId}/shelf/${shelf.id}`}>
          {shelf.title}
        </Link> :
        <Link className='bookshelf-sidebar__item__link' to={`/users/${this.props.match.params.userId}/shelf/${shelf.id}`}>
          {shelf.title}
        </Link>}
        {(["Read", "Reading", "Want to Read"].indexOf(shelf.title) === -1 && this.props.currentUsersPage ) ?
          <span className='bookshelf-sidebar__item__delete' onClick={this.destroy(shelf.id)}>(delete)</span> : null
        }
      </div>
    ));

    if(!this.props.userShelves){
        return(
          <div className='bookshelf-sidebar-loading-container'>
            <h2 className='bookshelf-sidebar-loading'>Loading...</h2>
              {this.props.errors.map((error, idx) => <li
                className='bookshelf-sidebar-error'
                key={ idx }>{error}</li>) }
          </div>
      );
    }
    return(
      <ul className='bookshelf-sidebar-container'>
        <Link className='bookshelf-sidebar__all-books' to={`/users/${this.props.match.params.userId}/shelf`} >
          All Shelves
        </Link>
        <div className='bookshelf-sidebar__div'></div>
        {shelfLinks}
        {this.props.currentUsersPage ? <form className='bookshelf-sidebar__form' onSubmit={this.handleSubmit}>
          <input className='bookshelf-sidebar__form__input' onChange={this.update} value={this.state.title}></input>
          <input className='bookshelf-sidebar__form__submit' type='submit' value='Add Shelf'></input>
        </form> : null
        }
      </ul>
    );
  }
}

export default withRouter(BookshelfSidebar);
