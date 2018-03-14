# == Schema Information
#
# Table name: books
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  author             :string           not null
#  synopsis           :text             not null
#  published          :date             not null
#  edition            :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  language           :string           not null
#  isbn               :integer          not null
#  length             :integer          not null
#  format             :string           not null
#  original_title     :string           not null
#  publisher          :string           not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Book < ApplicationRecord
  validates :title, :author, :synopsis, presence: true
  validates :title, uniqueness: { scope: [:author, :edition] }

  has_attached_file :image, default_url: "handbook.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :reviews

  has_many :bookshelvings

  has_many :bookshelves,
    through: :bookshelvings,
    source: :bookshelf

  def average_rating
    reviews = self.reviews.pluck(:rating)
    return 0 if reviews.empty?
    reviews.reduce(:+) / reviews.length.to_f


  end

end
