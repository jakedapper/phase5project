class ShowsController < ApplicationController


    def index 
        render json: Show.all, status: :ok
    end

    def create
        show = Show.create!(show_params)
        render json: show, status: :ok
    end 

    def update
        show = Show.find(params[:id])
        show.update(show_params)
        render json: show, status: :created
    end

    def destroy
        show = Show.find(params[:id])
        show.destroy
        head :no_content
    end

    private

    def show_params
        params.permit(:date, :doors_time, :soundcheck_time, :user_id, :set_time, :city_id, :tour_id, :venue_id)
    end

end
