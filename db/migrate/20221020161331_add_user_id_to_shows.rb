class AddUserIdToShows < ActiveRecord::Migration[7.0]
  def change
    add_column :shows, :user_id, :integer
  end
end
