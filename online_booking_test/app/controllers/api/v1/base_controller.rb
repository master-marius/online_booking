class Api::V1::BaseController < ApplicationController
  protect_from_forgery with: :exception
  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  def destroy_session
    request.session_options[:skip] = true
  end

  def not_found
    render json: {errors: 'Data Not found'} , status: 404
  end
end