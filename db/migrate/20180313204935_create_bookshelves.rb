class CreateBookshelves < ActiveRecord::Migration[5.1]
  def change
    create_table :bookshelves do |t|
      t.string :title, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end

    add_index :bookshelves, [:owner_id, :title], unique: true
  end
end
