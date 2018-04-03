json.reviews do
  json.partial! '/api/reviews/review', review: @review
end

json.books do
  json.bookId @book.id
  json.avgReview @book.average_rating
end
