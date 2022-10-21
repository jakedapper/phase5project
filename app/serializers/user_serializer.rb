class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :manager_band, :username, :password_digest


# def cord
#   self.object.tours.shows
# end

  has_many :shows
  has_many :tours
  has_many :reviews
  has_many :venues, through: :reviews
end
