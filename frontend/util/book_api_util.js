export const fetchBooks = () =>(
  $.ajax({
    url:'/api/books'
  })
);

export const fetchBook = (id) =>(
  $.ajax({
    url:`/api/books/${id}`
  })
);
