class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :greenroom_rating, :sound_engineer_rating, :merch_cut, :comments, :venue_id, :user_id
end
