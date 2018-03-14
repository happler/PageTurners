json.extract! user, :id, :username
json.bookshelfIds user.bookshelves.pluck(:id)
