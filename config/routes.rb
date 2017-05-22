Rails.application.routes.draw do
  resources :heroes, only: [:index]
  root 'heroes#index'
end
