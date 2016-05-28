class Api::V1::SchedulesController < Api::V1::BaseController

  def index
    schedules = Schedule.where(teacher_id: params[:teacher_id],
                               date: params[:date])
    
    if schedules.empty?
      schedules = Schedule.generate_time(params[:teacher_id], params[:date])
    end
    render json: schedules
  end

  private

  def schedule_params
    params.required(:schedule).permit(
      :teacher_id, :date, :time, :id
    )
  end
end