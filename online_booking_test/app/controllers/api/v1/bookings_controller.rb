class Api::V1::BookingsController < Api::V1::BaseController

  def index
    subs = Subscription.all

    render json: subs
  end
end