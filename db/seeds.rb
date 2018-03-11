# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

BOOK_IMAGES = %w(
  Christie
  Die_blechtrommel
  Dragon_Rider Dune
  educated
  enders_game
  geb
  handbook
  neuromancer
  snow
).freeze
User.destroy_all
User.create(username: "Muad'Dib", password: 'starwars')

Book.destroy_all
books = []
30.times do
  books << Book.create(
    title: Faker::Superhero.unique.name,
    author: Faker::RockBand.unique.name,
    synopsis: Faker::Lovecraft.unique.paragraphs(3).join(" \n"),
    published: Faker::Date.backward(8000),
    edition: "1st",
    language: ['English', 'Gaelic', 'German', 'Klingon', 'Farsi', 'Ruby'].sample,
    isbn: Faker::Number.number(8),
    length: Faker::Number.number(3),
    format: ['Hardcover', 'Paperback', 'e-Book', 'Mauscript'].sample,
    original_title: Faker::Lovecraft.tome,
    publisher: Faker::Book.publisher
  )
end
books.each do |book|
  img = BOOK_IMAGES.sample
  f = File.open("app/assets/images/#{img}.jpg")
  book.image = f
  f.close
  book.save
end

Review.destroy_all
users = User.all
books = Book.all
30.times do
  Review.create(user_id: users.sample.id, book_id: books.sample.id, rating: rand(1..5), title: Faker::Robin.quote, body: Faker::VentureBros.quote )
end
