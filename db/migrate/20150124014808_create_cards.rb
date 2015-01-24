class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :header
      t.string :description
      t.string :extra

      t.timestamps
    end
  end
end
