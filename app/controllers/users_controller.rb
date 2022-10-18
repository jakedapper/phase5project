class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    # before_action :set_user, only: [:show, :destroy]

    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end
  
    # def index 
    #   render json: User.all, status: :ok
    # end

    def show
      render json: @current_user, status: 200
    end
    
    def destroy
      user = User.find_by!(id: params[:id])
      user.destroy!
      head :no_content, status: :ok
    end

    private
 
    # def not_found
    #     render json: {"error": "User not found"}, status: :not_found
    #   end
    
    #   def invalid(error)
    #     render json: {error: error.message}, status: 422
    #   end

    # def set_user
    #   binding.pry
    #   @user = User.find(params[:id])
    # end

    def user_params
      params.permit(:name, :manager_band, :username, :password_digest, :password)
    end

end
