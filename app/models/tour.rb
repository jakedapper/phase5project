class Tour < ApplicationRecord
    belongs_to :user
    has_many :shows
    has_many :cities, through: :shows
end
