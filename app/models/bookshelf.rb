# == Schema Information
#
# Table name: bookshelves
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Bookshelf < ApplicationRecord
  validates :title, :owner_id, presence: true

  has_many :bookshelvings,
  dependent: :destroy

  has_many :books,
  through: :bookshelvings,
  source: :book

  belongs_to :owner,
  class_name: :User,
  foreign_key: :owner_id

  def all_books_with_ratings(current_user_id)
    self.books.includes(:reviews).where(reviews: {user_id: current_user_id})
      .select('books.*, COUNT(ag_reviews.rating) AS rating_count, AVG(ag_reviews.rating) AS rating_avg')
      .joins('JOIN reviews as ag_reviews on books.id = ag_reviews.book_id')
      .group('books.id','reviews.id')
  end

  # def all_books_with_ratings(current_user_id)
  #   Bookshelf.select('bookshelves.*, books.*, COUNT(all_reviews.rating) AS rating_count, AVG(all_reviews.rating) AS rating_avg, user_reviews.*')
  #     .joins(:books)
  #     .joins('JOIN reviews AS all_reviews on books.id = all_reviews.book_id')
  #     .joins('JOIN books AS all_books on all_books.id = all_reviews.book_id')
  #     .joins('JOIN reviews AS user_reviews on all_books.id = user_reviews.book_id')
  #     .where('bookshelves.id = ?', self.id)
  #     .where('user_reviews.user_id = ?', current_user_id)
  #     .group('bookshelves.id', 'books.id', 'user_reviews.id')
  # end

end
