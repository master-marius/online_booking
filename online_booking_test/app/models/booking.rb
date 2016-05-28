class Booking < ActiveRecord::Base
  belongs_to :member
  belongs_to :schedule
  belongs_to :lesson

end
