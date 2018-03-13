import React from 'react';

const ReviewDetails =({ reviews }) =>{
  let reviewCount = 0;
  let total = 0;
  let ratings = 0;
  let textReviews = 0;
  reviews.forEach(review =>{
    reviewCount++;
    total+= review.rating;
    if (review.body ===''){
      ratings++;
    } else{
      textReviews++;
    }

  });
  const average = (total/reviewCount).toFixed(2);

  const ratingStars = [];

  for (let i = 0; i < 5; i++) {
    ratingStars.push(i < Math.round(average)
      ? <img key={i} src={window.yellowStar} alt='Yellow Text' />
    : <img key={i} src={window.hollowStar} alt='Empty Text' />);
  }

  return(
    <div className='review-details-container'>
      <div className='review-details__average'>
        {ratingStars}
        <span className='review-details__average__number'>{average}</span>
      </div>
      <div className='review-details__mini-graph-container'>
        <img className='review-details__mini-graph' src={window.graph} />
          <span>Rating Details</span>
      </div>
      <span className='review-details__numbers'>{ratings} Ratings</span>
      <span className='review-details__numbers'>{textReviews} Reviews</span>
    </div>
  );
};
export default ReviewDetails;
