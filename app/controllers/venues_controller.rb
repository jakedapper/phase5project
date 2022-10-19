class VenuesController < ApplicationController

    def index 
        render json: Venue.all, status: :ok
    end

end
