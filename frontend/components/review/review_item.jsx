import React from 'react';

const ReviewItem  = ({userImage, username, dateUpdated, body, rating}) => {

  const ratingList = [];

  for (let i = 0; i < 5; i++) {
    ratingList.push(i < rating
      ? <li className='review-item__filled'></li>
      : <li className='review-item__empty'></li>);
  }

  return(
    <article className='review-item-container'>
      <header className='review-item__user'>
       <img className='review-item__user__image' src={userImage} />
       <div className='review-item__user__info'>
         <p className='review-item__user__name'>{username}</p>
         <ul>
           {ratingList}
         </ul>
       </div>
       <details className='review-item__user__date'>
         {dateUpdated}
       </details>
      </header>
      <p className='review-item__body'>
        {body}
      </p>
    </article>
  );
};
