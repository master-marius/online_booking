class Subscription < ActiveRecord::Base
  has_many :members

  validates_uniqueness_of :lesson_count
end
