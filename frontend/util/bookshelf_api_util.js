export const shelveBook = (shelfId, bookId) =>(
  $.ajax({
    url:`/api/bookshelves/${shelfId}/shelve`,
    method:'POST',
    data: {book: bookId},
  })
);

export const unshelveBook = (shelfId, bookId) =>(
  $.ajax({
    url:`/api/bookshelves/${shelfId}/unshelve`,
    method:'DELETE',
    data: {book: bookId},
  })
);

export const fetchShelf = (id) =>(
  $.ajax({
    url:`/api/bookshelves/${id}`
  })
);

export const postShelf = (bookshelves) =>(
  $.ajax({
    url:`/api/bookshelves`,
    method: 'POST',
    data: { bookshelves },
  })
);

export const deleteShelf = (shelfId) =>(
  $.ajax({
    url:`/api/bookshelves/${shelfId}`,
    method:'DELETE',
  })
);
