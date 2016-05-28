class ScheduleSerializer < ActiveModel::Serializer
  attributes :id, :teacher_id, :date, :time

  def time
    object.time.strftime("%I:%M %P").to_s 
  end
  
end
