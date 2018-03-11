import React from 'react';

const ReviewItem  = ({userImage, username, updatedAt, body, rating, title}) => {

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
        <div className='review-item__user__left'>
         <div className='review-item-top-bar'>
           <div className='review-item__user__info'>
             <p className='review-item__user__name'>{username}</p>
             <ul>
               {ratingList}
             </ul>
           </div>
           <details className='review-item__user__date'>
             {updatedAt}
           </details>
         </div>
         <div className='review-item-bottom-bar'>
           <p className='review-item-bottom-bar__title'>
             {title}
           </p>
         </div>
       </div>
      </header>
      <p className='review-item__body'>
        {body}
      </p>
    </article>
  );
};

export default ReviewItem;
