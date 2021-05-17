class CreateEventos < ActiveRecord::Migration[6.1]
  def change
    create_table :eventos do |t|
      t.string :name
      t.string :date
      t.string :location
      t.string :picture
      t.string :description

      t.timestamps
    end
  end
end
