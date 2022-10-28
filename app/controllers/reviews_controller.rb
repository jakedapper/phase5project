class ReviewsController < ApplicationController
    
    
    def index 
        render json: Review.all, status: :ok
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :ok
    end 

    def update
        review = Review.find(params[:id])
        review.update!(production_params)
        render json: review, status: :created
    end


    private

    def review_params
        params.permit(:greenroom_rating, :sound_engineer_rating, 
            :merch_cut, :comments, :venue_id, :user_id)
    end

end
