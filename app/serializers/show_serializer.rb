class ShowSerializer < ActiveModel::Serializer
  attributes :id, :date, :doors_time, :soundcheck_time, :set_time, :city_id, :tour_id

  belongs_to :city
  belongs_to :tour
  belongs_to :venue
end
