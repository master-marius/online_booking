class HasCompletedFirstLogin < ActiveRecord::Migration
  def change
    add_column :members, :has_completed_first_login, :boolean, :default => false
  end
end
