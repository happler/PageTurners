class AddUnique < ActiveRecord::Migration[5.1]
  def change
    add_index :users, :username, unique: true
  end
end