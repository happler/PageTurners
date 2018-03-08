class AddImages < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :cover_image, :string
  end
end
