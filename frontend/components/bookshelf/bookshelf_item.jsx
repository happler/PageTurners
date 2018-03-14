import React from 'react';
import { Link } from 'react-router-dom';
import MiniReviewContainer from '../review/mini_review_container';

const BookshelfItem = ({book}) =>{
  const { id, title, author, coverImage, avgReview, reviewCount, currentUserReview} = book;

  const updatedRating = currentUserReview[0]
    ? (((avgReview * reviewCount) + currentUserReview[0].rating) / (reviewCount + 1)).toFixed(3)
    : (avgReview).toFixed(3);

    return(
      <tr>
        <td><img className='bookshelf-item__image' src={ coverImage }></img></td>
        <td className='bookshelf-item__title' >{title}</td>
        <td className='bookshelf-item__author' >{author}</td>
        <td className='bookshelf-item__avgRating' >{updatedRating}</td>
        <td className='bookshelf-item__mini_review' ><MiniReviewContainer reviews={currentUserReview} bookId={id} /></td>
      </tr>
    );
};

export default BookshelfItem;