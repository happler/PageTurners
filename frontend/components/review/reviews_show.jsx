import React from 'react';
import ReviewItem from './review_item';

const ReviewsShow = ({ reviews }) =>{
  return(
    <div className='reviews-show-container'>
      {reviews.map(({user, updatedAt, body, rating}) => <ReviewItem
        userImage={'https://static.giantbomb.com/uploads/scale_small/0/9575/572746-dfg.jpg'}
        username={user}
        updatedAt={updatedAt}
        body={body}
        rating={rating}
        />)}
    </div>
  );
};

export default ReviewsShow;
