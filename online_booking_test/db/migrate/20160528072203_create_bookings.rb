class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :schedule_id, default: nil
      t.integer :member_id, default: nil
      t.integer :lesson_id, default: nil
    end
  end
end
