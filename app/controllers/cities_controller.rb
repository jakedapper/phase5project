class CitiesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound , with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index 
        render json: City.all, status: :ok
    end

end
