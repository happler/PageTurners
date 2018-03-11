json.books do
  @books.each do |book|
      json.set! book.id do
        json.id book.id
        json.title book.title
        json.author book.author
        json.coverImage asset_path(book.image.url)
        json.reviewIds []
      end
  end
end
