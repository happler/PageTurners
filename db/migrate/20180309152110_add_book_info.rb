class AddBookInfo < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :language, :string, null: false
    add_column :books, :isbn, :integer, null: false
    add_column :books, :length, :integer, null: false
    add_column :books, :format, :string, null: false
    add_column :books, :original_title, :string, null: false
    add_column :books, :publisher, :string, null: false
    change_column :books, :published, :date, null: false
    change_column :books, :edition, :string, null: false
    change_column :books, :cover_image, :string, null: false
  end
end
