class Show < ApplicationRecord
    belongs_to :city
    belongs_to :tour
    belongs_to :venue
end
