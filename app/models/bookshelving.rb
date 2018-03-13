# == Schema Information
#
# Table name: bookshelvings
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  shelf_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Bookshelving < ApplicationRecord
  validates :book_id, :bookshelf_id, presence: true

  belongs_to :book

  belongs_to :bookshelf
end
