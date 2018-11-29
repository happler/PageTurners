import React from 'react';
import ReviewDetails from '../review/review_details';


const BookTitleItem = ({ title, author, reviews, callback, feed}) =>{
  return(
    <div className='book-title-container'>
      <div className='book-title__title'>
        <span className={feed} onClick={callback} >{title}</span>
      </div>
      <div className='book-title__author'>
        <span> by {author}</span>
      </div>
      <div className='book-title__rating'>
        <ReviewDetails reviews={reviews} />
      </div>
    </div>
  );
};

export default BookTitleItem;
