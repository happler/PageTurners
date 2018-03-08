const fetchBooks =() =>(
  $.ajax({
    url:'/api/books'
  })
);

const fetchBook =(id) =>(
  $.ajax({
    url:`/api/books${id}`
  })
);
