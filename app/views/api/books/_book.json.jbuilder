json.set! book.id do
  json.extract! book, :id, :title, :author, :synopsis, :published, :edition, :language, :isbn, :format, :original_title, :publisher, :length
  json.coverImage asset_path(book.cover_image)
end
