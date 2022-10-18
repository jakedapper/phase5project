class ToursController < ApplicationController

    def index 
        render json: Tour.all, status: :ok
    end
end
