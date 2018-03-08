class Api::BooksController < ApplicationController

  def index
    @books = Book.all
    render '/api/books/index'
  end

  def show
    @book = Book.find(params[:id])
    if @book
      render '/api/books/show'
    else
      render json: @book.errors.full_messages, status: 404
    end
  end

end
