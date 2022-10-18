class TourSerializer < ActiveModel::Serializer
  attributes :id, :user_id

  belongs_to :user
  has_many :shows
  has_many :cities, through: :shows
end
