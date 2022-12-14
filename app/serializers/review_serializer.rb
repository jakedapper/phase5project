class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :greenroom_rating, :sound_engineer_rating, :merch_cut, :comments, :venue_id, :user_id, :user_name

  belongs_to :user
  belongs_to :venue

  def user_name
    {name: object.user.name}
  end

end
