import React from 'react';

const ReviewDetails =({ reviews }) =>{
  const reviewCount= reviews.length;
  const total = reviews.reduce((acc, review) => acc + review.rating);
  return(
    <div className='review-details-container'>
      <span>{total/reviewCount}</span>

    </div>
  );
};
