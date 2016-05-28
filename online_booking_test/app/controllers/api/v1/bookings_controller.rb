class Api::V1::BookingsController < Api::V1::BaseController
  include Exceptions
  rescue_from Exceptions::BookingError, :with => :booking_error

  before_action :check_member_subscription, only: [:create]

  def index
    subs = Subscription.all

    render json: subs
  end

  def create
    params[:booking][:member_id] = current_member.id

    booking = Booking.create(booking_params)
    
    if booking.valid?
      render json: booking
    else
      render json: { errors: booking.errors.full_messages}, status: :forbidden
    end

  end

  private

  def check_member_subscription

    schedule = Schedule.find(booking_params[:schedule_id])
    date = schedule.date
    bookings = Booking.joins(:schedule)
                      .where("schedules.date = '#{date}'")
                      .where("bookings.member_id = #{current_member.id}").count

    if bookings >= current_member.subscription_id
      raise Exceptions::BookingError
    end

  end


  def booking_params
    params.required(:booking).permit(
      :member_id, :schedule_id, :lesson_id
    )
  end

  def booking_error
    render json: { errors: ['Subscription limit per day reached!'] }, :status => :forbidden
  end
end