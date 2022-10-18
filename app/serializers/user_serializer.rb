class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :manager_band, :username, :password_digest

  has_many :tours
  has_many :reviews
  has_many :venues, through: :reviews
end
