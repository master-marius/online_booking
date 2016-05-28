class Api::V1::SchedulesController < Api::V1::BaseController

  def index
  #   schedules = Schedule.where(teacher_id: schedule_params[:teacher_id],
  #                              date: schedule_params[:date])
    schedules=Schedule.all.limit(10)
    render json: schedules
  end

  private

  def schedule_params
    params.required(:schedule).permit(
      :teacher_id, :date, :time, :id
    )
  end
end