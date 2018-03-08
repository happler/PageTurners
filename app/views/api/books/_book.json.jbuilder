json.set! book.id do
  json.extract! book, :id, :title, :author, :synopsis, :published, :edition
end
