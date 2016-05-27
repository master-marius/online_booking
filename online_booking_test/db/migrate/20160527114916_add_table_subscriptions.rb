class AddTableSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.string :name, null: false, default: ""

      t.timestamps null: false
    end
  end
end
