import React from 'react';
import ReviewItem from './review_item';

const ReviewsShow = ({ reviews }) =>{

  return(
    <div className='reviews-show-container'>
      {reviews.map(review =><ReviewItem
        userImage={'http://c-8oqtgrjgwu46x24yyyx2eeqokpiuqqpx2epgv.g00.superherohype.com/g00/3_c-8yyy.uwrgtjgtqjarg.eqo_/c-8OQTGRJGWU46x24jvvrx3ax2fx2fyyy.eqokpiuqqp.pgvx2fcuugvux2fwrnqcfux2f4239x2f28x2fJgnndqa.lrix3fk32e.octmx3dkocig_$/$/$/$/$/$'}
        username={review.user}
        updatedAt={review.updatedAt}
        body={review.body}
        rating={review.rating}
        title={review.title}
        />)}
    </div>
  );
};
