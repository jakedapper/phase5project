class NewshowsController < ApplicationController

    def create
        city = City.find_or_create_by!(city_params)
        render json: city, status: :ok

        venue = Venue.find_or_create_by!(venue_params)
        render json: venue, status: :ok

        show= Show.create!(show_params)
        render json: show, status: :ok
        
    end 


    private
    
    def city_params
        params.permit

end
