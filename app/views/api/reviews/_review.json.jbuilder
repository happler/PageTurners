json.set! review.id do
  json.extract! review, :body, :rating
  json.user review.user.username
  json.updatedAt review.updated_at
end
