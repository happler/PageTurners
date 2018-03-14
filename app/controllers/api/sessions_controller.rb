class Api::SessionsController < ApplicationController

  before_action :ensure_logged_in, except: :create

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render "/api/users/show"
    else
      render json: ["Sorry, we didn’t recognize that email/password combination. Please try again."], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
