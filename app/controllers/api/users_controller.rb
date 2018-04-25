class Api::UsersController < ApplicationController

  before_action :ensure_logged_in, except: :create


  def create
    @user = User.new(user_params)
    if @user.save
      @user.set_initial_shelves!
      login(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id:params[:id])
    if @user
      render :show
    else
      render json: ["Sorry, we can't find that user"], status: 404
    end
  end

  def shelves
    user_id = params[:id]
    @user = User.includes(bookshelves: {books: :reviews}).find_by(id:user_id)
    if @user
      @bookshelves = @user.bookshelves
      bookshelves_content = @bookshelves.map { |shelf| [shelf.id, shelf.all_books_with_ratings(user_id)] }
      @bookshelves_hash = bookshelves_content.group_by { |shelf| shelf[0] }
      @bookshelves_hash.each { |k, v| @bookshelves_hash[k] = v[0][1][0].ids } ##this works
      @books = bookshelves_content.map { |shelf| shelf[1][0] }.flatten
      reviews_arr = bookshelves_content.map {|shelf| shelf[1][1] }.flatten
      @reviews = reviews_arr.reduce { |acc, hash| acc.merge(hash) }
      render :shelves
    else
      render json: ["Sorry, we can't find that user"], status: 404
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)

  end

end
