class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.text :synopsis, null: false
      t.date :published
      t.string :edition

      t.timestamps
    end
    add_index :books, [:title, :author, :edition], unique: true
  end
end
