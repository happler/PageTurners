class CreateBookshelvings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookshelvings do |t|
      t.integer :book_id, null: false
      t.integer :bookshelf_id, null: false

      t.timestamps
    end
    add_index :bookshelvings, [:book_id, :bookshelf_id], unique: true
    add_index :bookshelvings,  :bookshelf_id
  end
end
