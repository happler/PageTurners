class Api::BookshelvesController < ApplicationController
  before_action :ensure_logged_in

  def show
    @bookshelf = Bookshelf.find_by(id: params[:id])
    if @bookshelf
      render :show
    else
      render json: ["Sorry, we couldn't find your bookshelf"], status: 404
    end
  end

  def create
    @bookshelf = current_user.bookshelves.new(bookshelves_params)
    if @render.save
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
    @bookshelf.books.delete(@book)
    if @bookshelf.books.include?(@book)
      render :shelve
    else
      render json: ['Whoops, something went wrong.'], status: 409
    end
  end

  def bookshelves_params
    params.require(:bookshelves).permit(:title)
  end

end
