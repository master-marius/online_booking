class Schedule < ActiveRecord::Base
  has_many :teachers

  def self.generate_time(teacher_id, date)
    date = Time.new.to_date.strftime('%Y-%m-%d')

    sec_interval = 60 * 30  # 60 sec * 30 min
    total_sched_time = 48
    start = 0
    time = 0
    sec = 0

    scheds = []
    while start < total_sched_time do
      time = Time.at(sec).utc.strftime("%H:%M")
      sec += sec_interval
      sched = Schedule.create({teacher_id: teacher_id, date: date, time: time})
      scheds.push(sched)
      start += 1
    end

    return scheds
  end
end
