class AddLessonCountToSubscriptions < ActiveRecord::Migration
  def change
    add_column :subscriptions, :lesson_count, :integer, :default => 1
  end
end
