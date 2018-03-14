export const postShelving = (shelfId, bookId) =>(
  $.ajax({
    url:`/api/bookshelves/${shelfId}/shelve`,
    method:'POST',
    data: {book: bookId},
  })
);

export const deleteShelving = (shelfId, bookId) =>(
  $.ajax({
    url:`/api/bookshelves/${shelfId}/unshelve`,
    method:'DELETE',
    data: {book: bookId},
  })
);

export const showShelving = (id) =>(
  $.ajax({
    url:`/api/bookshelves/${id}`
  })
);

export const createShelving = (bookshelves) =>(
  $.ajax({
    url:`/api/bookshelves`,
    method: 'POST',
    data: { bookshelves },
  })
);

export const destroyShelving = (shelfId) =>(
  $.ajax({
    url:`/api/bookshelves/${shelfId}`,
    method:'DELETE',
  })
);
