class Venue < ApplicationRecord
    belongs_to :city
    has_many :reviews
    has_many :shows
    has_many :users, through: :reviews
end
