class Api::V1::MembersController < Api::V1::BaseController

  # def show
  #   user = User.find(params[:id])

  #   render json: user
  # end

  def me
    user = current_member

    render json: user
  end

end