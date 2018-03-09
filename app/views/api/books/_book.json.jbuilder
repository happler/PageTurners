json.set! book.id do
  json.extract! book, :id, :title, :author, :synopsis, :published, :edition, :language, :isbn, :format, :publisher, :length
  json.coverImage asset_path(book.cover_image)
  json.originalTitle book.original_title
end
