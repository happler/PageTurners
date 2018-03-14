json.extract! user, :id, :username
json.bookshelfIds user.bookshelves.pluck(:id)

json.bookshelves do
  user.bookshelves.each do |shelf|
    json.set! shelf.id do
      json.id shelf.id
      json.title shelf.title
    end
  end
end
