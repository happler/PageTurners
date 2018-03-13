import React from 'react';
import MiniReviewContainer from '../review/mini_review_container';

const BookImageItem = ({ coverImage, reviews }) =>{
  return(
    <div className='book-image-container book-show__left'>
      <div className='book-image__cover-photo'>
        <img src={ coverImage }></img>
      </div>
      <div className='book-image__read-status'>
        <p>Reading shelf placeHolder</p>
      </div>
      <div className='book-image__rating'>
        <MiniReviewContainer reviews ={reviews} />
      </div>
    </div>
  );
};
// change for git to see
export default BookImageItem;
