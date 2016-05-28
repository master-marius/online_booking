class ScheduleSerializer < ActiveModel::Serializer
  attributes :id, :teacher_id, :date, :time

  def time
    object.time.strftime("%H:%M").to_s
  end
  
end
