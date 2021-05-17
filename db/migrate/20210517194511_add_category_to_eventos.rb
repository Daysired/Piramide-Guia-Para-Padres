class AddCategoryToEventos < ActiveRecord::Migration[6.1]
  def change
    add_column :eventos, :category, :string
  end
end
