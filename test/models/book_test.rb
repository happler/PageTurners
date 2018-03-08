# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  author      :string           not null
#  synopsis    :text             not null
#  published   :date
#  edition     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  cover_image :string
#

require 'test_helper'

class BookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
