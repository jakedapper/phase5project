class City < ApplicationRecord
    # belongs_to :tour
    has_many :shows
    has_many :venues
end
