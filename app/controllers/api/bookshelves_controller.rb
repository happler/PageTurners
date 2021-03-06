class Api::BookshelvesController < ApplicationController
  before_action :ensure_logged_in

  def show
    @bookshelf = Bookshelf.find_by(id: params[:id])
    if @bookshelf
      @books_with_ratings = @bookshelf.all_books_with_ratings(current_user.id)
      render :show
    else
      render json: ["Sorry, we couldn't find your bookshelf"], status: 404
    end
  end

  def create
    @bookshelf = current_user.bookshelves.new(bookshelves_params)
    if @bookshelf.save
      render :show
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def destroy
    @bookshelf = Bookshelf.find(params[:id])
    if @bookshelf.owner_id == current_user.id
      @bookshelf.destroy
      render :show
    else
      render json: @bookshelf.errors.full_messages, status: 403
    end
  end

  def shelve
    @bookshelf = Bookshelf.find(params[:id])
    @book = Book.find(params[:book][:id])
    if @bookshelf.books << @book
      render :shelve
    else
      render json: ['You already have that book in a shelf!'], status: 409
    end
  end

  def unshelve
    @bookshelf = Bookshelf.find(params[:id])
    @book = Book.find(params[:book][:id])
    was_there = @bookshelf.books.include?(@book)
    @bookshelf.books.delete(@book)
    if was_there
      render :shelve
    else
      render json: ['Whoops, something went wrong.'], status: 409
    end
  end

  def bookshelves_params
    params.require(:bookshelves).permit(:title)
  end

end
