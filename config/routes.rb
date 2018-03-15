Rails.application.routes.draw do

  root "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show] do
      member do
        get :shelves
      end
    end
    resources :books, only: [:show, :index]
    resources :reviews, only: [:create, :edit, :update, :destroy, :show]
    resources :bookshelves, only: [:create, :destroy, :show] do
      member do
        post :shelve
        delete :unshelve
      end
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
