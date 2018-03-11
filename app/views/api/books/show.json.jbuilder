json.books do
  json.partial! '/api/books/book', book: @book
end

json.reviews do
  @book.reviews.each do |review|
    json.set! review.id do
      json.partial! '/api/reviews/review', review: review
    end
  end
end
