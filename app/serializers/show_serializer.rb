class ShowSerializer < ActiveModel::Serializer
  attributes :id, :date, :doors_time, :soundcheck_time, :set_time, :city_id, :tour_id, :city_name, :venue_coordinates

  belongs_to :city
  belongs_to :tour
  belongs_to :venue
  
  def city_name
    object.city.name
  end

  def venue_coordinates
    {lat: object.venue.lat, lng: object.venue.lng}
  end


end
