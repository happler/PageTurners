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
    @user = User.find_by(params[:id])
    if @user
      render :show
    else
      render json: ["Sorry, we can't find that user"], status: 404
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)

  end

end
