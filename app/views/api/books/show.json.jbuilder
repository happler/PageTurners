json.books do
  json.partial! '/api/books/book', book: @book
  # json.currentUserShelves @book_owners
end

json.reviews do
  @book.reviews.each do |review|
      json.partial! '/api/reviews/review', review: review
  end
end
