Rails.application.routes.draw do
  
  resources :reviews
  resources :shows, only: [:index, :create, :update, :destroy]
  resources :venues
  resources :cities
  resources :tours
  resources :users
  # resources :nearby_restaurants
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  
  get "/nearby", to: "maybe#index"
  

  # post "/signup", to: "employees#create"
  # get "/me", to: "employees#show"
  # post "/login", to: "sessions#create"
  # delete "/logout", to: "sessions#destroy"

  # get '*path',
  #     to: 'fallback#index',
  #     constraints: ->(req) { !req.xhr? && req.format.html? }
  end
