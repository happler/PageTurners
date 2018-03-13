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

  has_many :bookshelvings

  has_many :books,
  through: :bookshelvings,
  source: :books

  belongs_to :owner,
  class_name: :User,
  foreign_key: :owner_id

end
