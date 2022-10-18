class ShowsController < ApplicationController


    def index 
        render json: Show.all, status: :ok
    end
end
