class CreateTableTeachers < ActiveRecord::Migration
  def change
    create_table :teachers do |t|
      t.string :name, null: false, default: ""
      t.string :gender, null: false, default: ""
      t.string :nationality, null: false, default: ""

      t.timestamps null: false
    end
  end
end
