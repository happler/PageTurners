import React from 'react';

const ReviewItem  = ({userImage, username, updatedAt, body, rating}) => {

  const ratingList = [];

  for (let i = 0; i < 5; i++) {
    ratingList.push(i < rating
      ? <li className='review-item__filled' key={i}><i class="fas fa-star"></i></li>
      : <li className='review-item__empty' key={i}><i className="far fa-star"></i></li>);
  }

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
      </div>
    </article>
  );
};

export default ReviewItem;
