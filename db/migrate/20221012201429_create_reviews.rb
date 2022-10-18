class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :greenroom_rating
      t.integer :sound_engineer_rating
      t.string :merch_cut
      t.string :comments
      t.integer :venue_id
      t.integer :user_id

      t.timestamps
    end
  end
end
