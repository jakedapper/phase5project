class RemoveManagerBandFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :manager_band, :string
  end
end
