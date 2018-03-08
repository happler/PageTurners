require 'test_helper'

class BooksControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get books_show_url
    assert_response :success
  end

  test "should get index" do
    get books_index_url
    assert_response :success
  end

end
