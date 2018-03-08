json.books do
  json.partial! '/api/books/book', book:@book
end
