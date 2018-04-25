json.set! book.id do
  json.id book.id
  json.title book.title
  json.author book.author
  json.coverImage asset_path(book.image.url)
  json.avgReview book.avg_rating
  json.reviewCount book.rating_count
  json.currentUserReview review
  json.reviewIds []
end
