import React from 'react';
import ReviewItem from './review_item';

const ReviewsShow = ({ reviews }) =>{
  return(
    <div className='reviews-show-container'>
      {reviews.map(({user, updatedAt, body, rating, title }) => <ReviewItem
        userImage={'https://static.giantbomb.com/uploads/scale_small/0/9575/572746-dfg.jpg'}
        username={user}
        updatedAt={updatedAt}
        body={body}
        rating={rating}
        title={title}
        />)}
    </div>
  );
};

export default ReviewsShow;
