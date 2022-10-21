class VenuesController < ApplicationController

    def index 
        render json: Venue.all, status: :ok
    end

    def create
        venue = Venue.create!(venue_params)
        render json: venue, status: :ok
    end 

    private

    def venue_params
        params.permit(:name, :address, :city_id, :lat, :lng)
    end

end
