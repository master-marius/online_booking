class CreateTableLessons < ActiveRecord::Migration
  def change
    create_table :lessons do |t|
      t.integer :name, default: nil
    end
  end
end
