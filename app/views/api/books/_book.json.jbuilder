json.set! book.id do
  json.extract! book, :id, :title, :author, :synopsis, :published, :edition
  json.coverImage asset_path(book.cover_image)
end
