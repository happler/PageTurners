class Api::BooksController < ApplicationController

  def index
    @books = Book.all
    render '/api/books/index'
  end

  def show
    @book = Book.find_by(id: params[:id])
    if @book
      render '/api/books/show'
    else
      render json: ["Sorry, we couldn't find your book"], status: 422
    end
  end
end
