json.bookshelves do
  @bookshelves.each do |shelf|
    json.partial! 'api/bookshelves/bookshelf.json.jbuilder', bookshelf: shelf
  end
end

json.books do
  @books.each do |book|
    json.partial! 'api/books/book_shelved.json.jbuilder', book: book
  end
end

json.user do
  json.set! @user.id do
    json.extract! @user, :id, :username
    json.bookshelfIds @user.bookshelves.pluck(:id)
  end
end
