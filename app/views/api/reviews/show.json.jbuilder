json.reviews do
  json.partial! '/api/reviews/review', review: @review
end

# json.books do
#   json.set! @book.id do
#     json.avgReview @book.average_rating
#   end
# end
