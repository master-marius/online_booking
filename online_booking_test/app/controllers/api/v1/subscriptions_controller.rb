class Api::V1::SubscriptionsController < Api::V1::BaseController

  def show
    user = User.find(params[:id])

    render json: user
  end

  def index
    subs = Subscription.all

    render json: subs
  end
end