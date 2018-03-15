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
    return e => this.props.deleteShelf(id);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.postShelf(this.state).then(() => this.setState({title:''}) );
  }

  render(){

    const shelfLinks = this.props.userShelves.map((shelf, idx) => (
      <div key={idx}>
        <Link to={`/users/${this.props.match.params.userId}/shelf/${shelf.id}`} key={idx}>{shelf.title}</Link>
        {(["Read", "Reading", "Want to Read"].indexOf(shelf.title) === -1 ) ?
          <span key={idx} onClick={this.destroy(shelf.id)}>(delete)</span> : null
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
      <ul>
        <Link to={`/users/${this.props.match.params.userId}/shelf`} >All Shelves</Link>
        {shelfLinks}
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.update} value={this.state.title}></input>
          <input type='submit' value='Add Shelf'></input>
        </form>
      </ul>
    );
  }
}

export default withRouter(BookshelfSidebar);
