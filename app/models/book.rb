# == Schema Information
#
# Table name: books
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  author         :string           not null
#  synopsis       :text             not null
#  published      :date             not null
#  edition        :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  cover_image    :string           not null
#  language       :string           not null
#  isbn           :integer          not null
#  length         :integer          not null
#  format         :string           not null
#  original_title :string           not null
#  publisher      :string           not null
#

class Book < ApplicationRecord
  validates :title, :author, :synopsis, presence: true
  validates :title, uniqueness: { scope: [:author, :edition] }

end
