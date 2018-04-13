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

  def all_books_with_ratings
    self.books.select('books.*, COUNT(rating) AS rating_count, AVG(rating) AS rating_avg')
      .joins(:reviews)
      .group('books.id')
  end

end
