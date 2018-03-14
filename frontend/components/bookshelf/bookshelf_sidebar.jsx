import React from 'react';
import { Link } from 'react-router-dom';

class BookshelfSidebar extends React.Component{

  componentDidMount(){
    if(!this.props.userShelves){
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  render(){
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
      {this.props.userShelves.map((shelf, idx) => (
        <Link to={`/users/${this.props.match.params.userId}/${shelf.id}`} key={idx}>{shelf.title}</Link>
      ))}
    </ul>
  )
  }

}
