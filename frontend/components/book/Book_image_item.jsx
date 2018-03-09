import React from 'react';

const BookImageItem = ({ coverImage }) =>{
  return(
    <div className='book-image-container book-show__left'>
      <div className='book-image__cover-photo'>
        <img src={ coverImage }></img>
      </div>
      <div className='book-image__read-status'>
        <p>Reading/Read/Will Read</p>
      </div>
      <div className='book-image__rating'>
        <p>User rating Five by Five</p>
      </div>
    </div>
  );
};
// change for git to see
export default BookImageItem;
