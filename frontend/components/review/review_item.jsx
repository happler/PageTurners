import React from 'react';
import { Link } from 'react-router-dom';

const ReviewItem  = ({userImage, username, updatedAt, body, rating, deleteReview, id, currentUserId, userId, bookId}) => {

  const ratingList = [];

  for (let i = 0; i < 5; i++) {
    ratingList.push(i < rating
      ? <img key={i} src={window.yellowStar} alt='Yellow Text' />
    : <img key={i} src={window.hollowStar} alt='Empty Text' />);
  }

   const extraButtons =  userId === currentUserId
    ? <div className='review-item__buttons'>
        <Link className='review-item__edit' to={`/books/${bookId}/addReview/${id}`}>Edit Review</Link>
        <span className='review-item__delete' onClick={(e)=>deleteReview(id)}>Delete Review</span>
      </div>
    : null;

  return(
    <article className='review-item-container'>
      <img className='review-item__user__image' src={userImage} />
      <div className='review-item__right'>
        <header className='review-item__user'>
          <div className='review-item__user__info'>
            <div className='review-item__user__left'>
              <p className='review-item__user__name'>{username }</p>
              <p className='review-item__user__rating__label'> Rated it </p>
              <ul className='review-item__user__rating'>
                { ratingList}
              </ul>
            </div>
            <div className='review-item__user__date'>
              {updatedAt}
            </div>
           </div>
        </header>
        <p className='review-item__body'>
          {body}
        </p>
        {extraButtons}
      </div>
    </article>
  );
};

export default ReviewItem;
