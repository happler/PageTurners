import React from 'react';
import { withRouter } from 'react-router-dom';
import BookImageItem from './book_image_item';
import BookTitleItem from './book_title_item';

class BookShow extends React.Component{
  compoentDidMount(){
    if (!this.props.book){
      this.props.fetchBook(this.props.match.path.params.id);
    }

  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  render(){
    if (!this.props.book){
      return <h2>Loading...</h2>;
    }
    const { title, author, synopsis, published, edition, coverImage}
    return(
    <div className='book-show-container'>
      <BookImageItem coverImage={coverImage}/>
      <div className='book-show__right'>
        <BookTitleItem title={title} author={author}
      </div>
    </div>
  )}
}
