class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest

  has_many :shows
  has_many :tours
  has_many :reviews
  has_many :venues, through: :reviews
end
