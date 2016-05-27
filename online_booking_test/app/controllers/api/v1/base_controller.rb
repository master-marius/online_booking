class Api::V1::BaseController < ApplicationController
  # protect_from_forgery with: :exception
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  skip_before_filter  :verify_authenticity_token
  

  def destroy_session
    request.session_options[:skip] = true
  end

  def not_found
    render json: {errors: 'Data Not found'} , status: 404
  end

  private

  def check
    binding.pry
  end
end