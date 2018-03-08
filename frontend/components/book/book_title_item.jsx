import React from 'react';

const BookTitleItem = ({ title, author, RatingStuff}) =>{
  return(
    <div className='book-title-container'>
      <div className='book-title__title'>
        <span >{title}</span>
      </div>
      <div className='book-title__author'>
        <span>{author}</span>
      </div>
      <div className='book-title__rating'>
        <p>Rating stats go here</p>
      </div>
    </div>
  );
};

export default BookTitleItem;
