class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city_id, :coordinates

  def coordinates
    {lat: self.object.lat, lng: self.object.lng}
  end

  has_many :reviews
  has_many :shows
  
end
