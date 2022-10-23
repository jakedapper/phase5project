class ToursController < ApplicationController

    def index 
        render json: Tour.all, status: :ok
    end

    def show
        render json: Tour.find_by!(id: params[:id]), status: :ok
    end

    def create
        tour = Tour.create!(tour_params)
        render json: tour, status: :ok
    end 

    private

    def tour_params
        params.permit(:user_id)
    end
end
