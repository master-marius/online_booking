class Api::V1::MembersController < Api::V1::BaseController

  def me
    user = current_member

    render json: user
  end

  def update
    member = Member.find(params[:id])

    if member.update(member_params) 
      render json: member
    else
      render json: { errors: member.errors }, status: 422
    end
  end

  private

  def member_params
    params.required(:member).permit(
      :email, :password, :password_confirmation, :subscription_id, :has_completed_first_login
    )
  end

end