json.books do
  json.set! book.id do
    json.extract! book, :id, :title, :author, :synopsis, :published, :edition, :language, :isbn, :format, :publisher, :length
    json.coverImage asset_path(book.image.url)
    json.originalTitle book.original_title
    json.reviewIds book.reviews.pluck(:id)
    json.currentUserReview book.reviews.where(user_id: current_user.id)
  end
end

json.reviews do
  book.reviews.each do |review|
      json.partial! '/api/reviews/review', review: review
  end
end
