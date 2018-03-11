import React from 'react';

const ReviewFormBook = ({ title, author, coverImage}) =>{
  return(
    <section className='review-form-book-container'>
      <img className='review-form-book__cover' src={coverImage} />
      <section className='review-form-book__right'>
        <article className='review-form-book__title'>
          {title}
        </article>
        <article className='review-form-book__author'>
          {author}
        </article>
      </section>
    </section>
  );
};
export default ReviewFormBook;
