require 'test_helper'

class BookingTest < ActiveSupport::TestCase
    test "it should not create duplicate booking.schedule_id for member" do
      booking = Booking.new(schedule_id: 1, member_id: 1, lesson_id: 1)
      assert_not booking.save, "Trying to save booking with duplicate schedule_id for member"
    end

    test "it should not create booking with member exceed max lessons/day" do
      date = Time.new.to_date.strftime('%Y-%m-%d')
      schedule1 = Schedule.find(1)
      schedule1.update_attributes(date: date)
      schedule2 = Schedule.find(2)
      schedule2.update_attributes(date: date)

      member = Member.first

      assert Booking.create({member_id: member.id, schedule_id: 2}), "Trying to save booking with exceeding subscription"
    end
end
