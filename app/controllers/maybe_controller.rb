class MaybeController < ApplicationController
    # before_action :initialize
    
    # def index
    #     if params[:search]
    #         @client = ::GooglePlaces::Client.new(Rails.application.secrets.places_api_key)
    #         @client.spots(-33.8670522, 151.1957362, :types => 'restaurant')
    #         @places = @client.spots_by_query(params[:search])
    #     end
    #   end


    def index
        @client = GooglePlaces::Client.new(AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY)
        @client.spots(-33.8670522, 151.1957362, :types => 'restaurant')
    end

    # def index
    #     if params[:search]
    #         @client = ::GooglePlaces::Client.new(Rails.application.secrets.places_api_key)
    #         @places = @client.spots_by_query(params[:search])
    #         render json: @client.spots(-33.8670522, 151.1957362, :types => 'restaurant')
    #     end
    #   end
    

    # private 

    # def initialize
    #     @client = ::GooglePlaces::Client.new(Rails.application.secrets.places_api_key)
    # end

end
