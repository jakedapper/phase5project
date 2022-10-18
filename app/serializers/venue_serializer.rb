class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city_id

  has_many :reviews
  has_many :shows
  
end
