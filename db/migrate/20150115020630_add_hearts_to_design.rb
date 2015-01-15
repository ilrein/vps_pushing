class AddHeartsToDesign < ActiveRecord::Migration
  def change
    add_column :designs, :hearts, :integer
  end
end
