class CreateTableSchedules < ActiveRecord::Migration
  def change
    create_table :schedules do |t|
      t.integer :subscription_id, default: nil
      t.date :date, default: nil
      t.time :time, default: nil
    end
  end
end
