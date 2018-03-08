import React from 'react';
import { withRouter } from 'react-router-dom';
import BookImageItem from './book_image_item';
import BookTitleItem from './book_title_item';

class BookShow extends React.Component{
  componentDidMount(){
    if (!this.props.book){
      this.props.fetchBook(this.props.match.params.id);
    }

  }
  componentWillReceiveProps(newProps){
    if (this.props.match.params.id !== newProps.match.params.id){
      this.props.fetchBook(newProps.match.params.id);
    }
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  render(){
    if (!this.props.book){
      return(
        <div>
          <h2 className='book-show-loading'>Loading...</h2>
            {this.props.errors.map((error, idx) => <li
              className='book-show-error'
              key={ idx }>{error}</li>) }
        </div>
    );}
    const { title, author, synopsis, published, edition, coverImage } = this.props.book;
    return(
      <div>
        {this.props.errors.map((error, idx) => <li
          className='book-show-error'
          key={ idx }>{error}</li>) }
        <div className='book-show-container'>
          <BookImageItem coverImage={coverImage}/>
          <div className='book-show__right'>
            <BookTitleItem title={title} author={author} />
            <p className='book-show-synopsis'>
              {synopsis}
            </p>
          </div>
        </div>
      </div>
  );}
}

export default withRouter(BookShow);
