export const fetchUser = (id) =>(
  $.ajax({
    url:`/api/books/${id}`
  })
);
