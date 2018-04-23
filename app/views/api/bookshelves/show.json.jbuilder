
debugger
json.bookshelves do
  json.partial! 'api/bookshelves/bookshelf', bookshelf: @bookshelf
end

json.books do
  @bookshelf.books.each do |book|
    json.set! book.id do
      json.id book.id
      json.title book.title
      json.author book.author
      json.coverImage asset_path(book.image.url)
      json.avgReview book.rating_avg
      json.reviewCount book.rating_count
      json.currentUserReview book.user_reviews
    end
  end
end
