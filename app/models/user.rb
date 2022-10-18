class User < ApplicationRecord
    has_secure_password

    has_many :tours
    has_many :reviews
    has_many :venues, through: :reviews

    # validates :username, presence: true, uniqueness: true
end
