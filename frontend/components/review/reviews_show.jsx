import React from 'react';
import ReviewItem from './review_item';

const ReviewsShow = ({ reviews, deleteReview, currentUserId }) =>{
  return(
    <div className='reviews-show-container'>
      {reviews.map(({user, updatedAt, body, rating, id, user_id, bookId}) => <ReviewItem
        userImage={'https://static.giantbomb.com/uploads/scale_small/0/9575/572746-dfg.jpg'}
        username={user}
        updatedAt={updatedAt}
        body={body}
        rating={rating}
        deleteReview={deleteReview}
        id={id}
        user_id={user_id}
        bookId={bookId}
        currentUserId={currentUserId}
        key={id}
        />)}
    </div>
  );
};

export default ReviewsShow;
