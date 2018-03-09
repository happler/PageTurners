class RemovecoverImage < ActiveRecord::Migration[5.1]
  def change
    remove_column :books, :cover_image, :string
  end
end
