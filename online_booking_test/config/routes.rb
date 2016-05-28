Rails.application.routes.draw do
  devise_for :members
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'dashboard#index'

  namespace :api do
    namespace :v1 do
      resources :members, only: [:index, :create, :show, :update, :destroy] do
        collection do
          get 'me'
        end
      end

      resources :subscriptions
      resources :teachers do
        collection do
          get 'search'
        end
      end
      resources :lessons
      resources :schedules
      resources :bookings
    end
  end
end
