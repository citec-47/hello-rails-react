Rails.application.routes.draw do
  resources :greetings
  get 'root/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'root#index'
  namespace :api do
    namespace :v1 do
      resources :greetings
    end
  end
end
