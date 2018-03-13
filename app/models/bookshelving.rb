# == Schema Information
#
# Table name: bookshelvings
#
#  id           :integer          not null, primary key
#  book_id      :integer          not null
#  bookshelf_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Bookshelving < ApplicationRecord
  validates :book_id, :bookshelf_id, presence: true

  belongs_to :book

  belongs_to :bookshelf
end
