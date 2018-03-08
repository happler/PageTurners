json.books do
  @books.each do |book|
    json.partial! '/api/books/book', book: book
  end
end
