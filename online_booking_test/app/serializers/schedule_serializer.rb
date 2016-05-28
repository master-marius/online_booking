class ScheduleSerializer < ActiveModel::Serializer
  attributes :id, :teacher, :date, :time

  has_one :teacher

  def time
    object.time.strftime("%I:%M %P").to_s 
  end
  
end
