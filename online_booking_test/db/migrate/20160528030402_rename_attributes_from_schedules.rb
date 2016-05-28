class RenameAttributesFromSchedules < ActiveRecord::Migration
  def change
    rename_column :schedules, :subscription_id, :teacher_id
  end
end
