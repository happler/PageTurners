import React from 'react';
import ReviewItem from './review_item';

const ReviewsShow = ({ reviews, deleteReview, currentUserId }) =>{
  return(
    <div className='reviews-show-container'>
      {reviews.map(({user, updatedAt, body, rating, id, userId, bookId}) => <ReviewItem
        userImage={'https://static.giantbomb.com/uploads/scale_small/0/9575/572746-dfg.jpg'}
        username={user}
        updatedAt={updatedAt}
        body={body}
        rating={rating}
        deleteReview={deleteReview}
        id={id}
        userId={userId}
        bookId={bookId}
        currentUserId={currentUserId}
        key={id}
        />)}
    </div>
  );
};

export default ReviewsShow;
