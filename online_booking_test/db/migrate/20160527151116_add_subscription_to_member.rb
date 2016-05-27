class AddSubscriptionToMember < ActiveRecord::Migration
  def change
    add_column :members, :subscription_id, :integer, :default => nil
  end
end
