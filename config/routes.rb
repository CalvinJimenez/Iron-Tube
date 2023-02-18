Rails.application.routes.draw do
  resources :likes
  resources :videos
  resources :users


  post    "/login",         to: "sessions#create"

  get     "/userInSession", to: "sessions#get_logged_in_user"
  
  delete  "/logout",        to: "sessions#destroy"




  # post "/login", to: "application#login"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html




end
