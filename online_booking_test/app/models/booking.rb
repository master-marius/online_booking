class Booking < ActiveRecord::Base
  belongs_to :member
  belongs_to :schedule
  belongs_to :lesson

  validates_uniqueness_of :schedule
end
