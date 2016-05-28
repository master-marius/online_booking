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

    render json: booking
  end

  private

  def check_member_subscription
    
    booking = Booking.where(schedule_id: booking_params[:schedule_id], member_id: current_member.id).limit(1)

    if booking
      raise Exceptions::BookingError
    end

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
    render json: { errors: 'Subscription limit per day reached!' }, :status => :forbidden
  end
end