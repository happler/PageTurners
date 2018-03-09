
@books.each do |book|
    json.set! book.id do
      json.id book.id
      json.title book.title
      json.author book.author
      
    end
  end
