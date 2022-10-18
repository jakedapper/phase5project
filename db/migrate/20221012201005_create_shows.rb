class CreateShows < ActiveRecord::Migration[7.0]
  def change
    create_table :shows do |t|
      t.string :date
      t.string :doors_time
      t.string :soundcheck_time
      t.string :set_time
      t.integer :city_id
      t.integer :tour_id
      t.integer :venue_id

      t.timestamps
    end
  end
end
