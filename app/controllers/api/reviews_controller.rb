class Api::ReviewsController < ApplicationController
  def create
    @review = current_user.reviews.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def edit
    @review = current_user.reviews.find(params[:id])
  end

  def update
    @review = current_user.reviews.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  def destroy
    review = Review.find(params[:id])
    if review.user_id == current_user.id
      review.destroy
      render json: ["successful deletion"] # this should never be used, Render as an error?
    else
      render json: ["permission denied"], status: 403
    end
  end

  def review_params
    params.require(:review).permit(:body, :rating, :book_id)

  end

end
