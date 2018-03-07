# == Schema Information
#
# Table name: books
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  author     :string           not null
#  synopsis   :text             not null
#  published  :date
#  edition    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Book < ApplicationRecord
  validates :title, :author, :synopsis, presence: true
  validates :title, uniqueness: {scope: [:author, :edition] }
end
