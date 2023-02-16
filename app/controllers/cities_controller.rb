class CitiesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound , with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index 
        render json: City.all, status: :ok
    end

    def create
        city = City.create!(city_params)
        render json: city, status: :ok
    end 

    private

    def city_params
        params.permit(:name)
    end

end
