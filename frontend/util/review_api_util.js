export const postReview = review =>(
  $.ajax({
    url:'api/reviews',
    method: 'POST',
    data: { review }
  })
);

export const patchReview = review =>(
  $.ajax({
    url:`api/reviews/${review.id}`,
    method: 'PATCH',
    data: { review }
  })
);

export const deleteReview = (id) =>(
  $.ajax({
    url:`api/reviews/${id}`,
    method: 'DELETE',
  })
);

export const fetchReview = id =>(
  $.ajax({
    url:`api/reviews/${id}`,
  })
);
