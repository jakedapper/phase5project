class SessionsController < ApplicationController
    skip_before_action :authorize

    def create
        user = User.find_by(username: params[:username])
        
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { error: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end


    # private

    # def self.authenticate(username, password)
    #     user = find_by_email(username)
    #     if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
    #       user
    #     else
    #       nil
    #     end
    #   end
end
