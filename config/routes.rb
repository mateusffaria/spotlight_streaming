Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'artists/home'
    end
  end
  devise_for :users
  root 'home#index'

  concern :favoritable do |options|
    shallow do
      post '/favorite', { to: 'favorites#create', on: :member }.merge(options)
      delete '/favorite', { to: 'favorites#destroy', on: :member }.merge(options)
    end
  end

  concern :playlists do |options|
    shallow do
      post '/:song', { to: 'playlists#create', on: :member }.merge(options)
      delete '/:song', { to: 'playlists#destroy', on: :member }.merge(options)
    end
  end  

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :dashboard, only: :index
      resources :playlists, only: [:index, :show, :create, :destroy] do
        concerns :playlists
      end
      resources :categories, only: [ :index, :show ]
      resources :search, only: :index
      resources :artists, only: [:show, :index]
      resources :albums, only: :show do
        resources :recently_heards, only: :create
        concerns :favoritable, favoritable_type: 'Album'
      end
      resources :favorites, only: :index

      resources :songs, only: [] do
        concerns :favoritable, favoritable_type: 'Song'
      end
    end
  end
  get "*path", to: "home#index", :constraints => lambda{ |req| req.path !~ /\.(png|jpg|js|css|json|mp3)$/ }
end
