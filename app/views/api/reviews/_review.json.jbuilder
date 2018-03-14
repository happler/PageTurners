json.set! review.id do
  json.extract! review, :body, :rating, :id
  json.user_id review.user_id
  json.bookId review.book_id
  json.user review.user.username
  json.updatedAt review.updated_at.to_formatted_s(:long)
end

json.set! review.id do
  json.review review
end
