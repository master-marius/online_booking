class UpdateLessonColumn < ActiveRecord::Migration
  def change
    remove_column :lessons, :name
    add_column :lessons, :name, :string
  end
end
