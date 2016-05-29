class Booking < ActiveRecord::Base
  belongs_to :member
  belongs_to :schedule
  belongs_to :lesson

  validates :schedule_id, uniqueness: { scope: [:schedule_id, :member_id] }
end
