import React from 'react';

const BookImageItem = ({ coverImage }) =>{
  return(
    <div className='book-image-container book-show__left'>
      <div className='book-image__cover-photo'>
        <img src={ coverImage }></img>
      </div>
      <div className='book-image__read-status'>
        <p>Reading shelf placeHolder</p>
      </div>
      <div className='book-image__rating'>
        <p>User rating placeHolder</p>
      </div>
    </div>
  );
};
// change for git to see
export default BookImageItem;
