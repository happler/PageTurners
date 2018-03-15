json.set! bookshelf.id do
  json.id bookshelf.id
  json.title bookshelf.title
  json.ownerId bookshelf.owner_id
  json.bookIds bookshelf.books.pluck(:id)
end
