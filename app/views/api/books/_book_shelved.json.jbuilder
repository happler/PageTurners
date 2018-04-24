json.set! book.id do
  json.id book.id
  json.title book.title
  json.author book.author
  json.coverImage asset_path(book.image.url)
  json.avgReview book.average_rating
  json.reviewCount book.reviews.length
  json.currentUserReview book.reviews.where(user_id: current_user.id)
  json.reviewIds []
end
