import React from 'react';

const ReviewItem =>(
  return(
    <article className='review-item-container'>
      <header className='review-item__user'>
       <img className='review-item__user__image' src={this.props.userImage} />
       <div className='review-item__user__info'>
         <p className='review-item__user__name'>{this.props.username}</p>
         <ul>
           <li className='review-item__1star'></li>
           <li className='review-item__2star'></li>
           <li className='review-item__3star'></li>
           <li className='review-item__4star'></li>
           <li className='review-item__5star'></li>
         </ul>
       </div>
      </header>

    </article>
  )
)
