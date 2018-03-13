json.bookshelves do
  json.partial! 'ap/bookshelves/bookshelf', bookshelf: @bookshelf
end

json.books do
  @bookshelf.books.each do |book|
    json.id book.id
    json.title book.title
    json.author book.author
    json.coverImage asset_path(book.image.url)
    json.avgReview book.average_rating
    # json.currentUserReview book.reviews.find_by(user_id: current_user.id)
    # json.dateAdded
  end
end
