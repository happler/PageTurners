

json.bookshelves do
  json.partial! 'api/bookshelves/bookshelf', bookshelf: @bookshelf
end

json.books do
  @books_with_ratings[0].each do |book|
    json.set! book.id do
      json.id book.id
      json.title book.title
      json.author book.author
      json.coverImage asset_path(book.image.url)
      json.avgReview book.avg_rating
      json.reviewCount book.rating_count
      json.currentUserReview @books_with_ratings[1][book.id][0]
    end
  end
end
