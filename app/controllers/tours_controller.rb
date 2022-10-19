class ToursController < ApplicationController

    def index 
        render json: Tour.all, status: :ok
    end

    def show
        render json: Tour.find_by!(id: params[:id]), status: :ok
    end
end
