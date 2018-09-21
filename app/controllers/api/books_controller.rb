class Api::BooksController < ApplicationController
  before_action :ensure_logged_in

  def index
    @books = Book.all
    render '/api/books/index'
  end

  def show
    @book = Book.includes(:bookshelves, :reviews => :user).find_by(id: params[:id])
    if @book
      render '/api/books/show'
    else
      render json: ["Sorry, we couldn't find your book"], status: 404
    end
  end
end
