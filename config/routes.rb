Rails.application.routes.draw do
  resources :eventos
  get '/eventos', to: 'eventos#index'
  get '/eventos/:id', to: 'eventos#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
