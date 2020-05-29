Rails.application.routes.draw do
  devise_for :users
  root 'top#index'
  resources :users, only: [:edit]
  resources :members, only: [:update]
end
