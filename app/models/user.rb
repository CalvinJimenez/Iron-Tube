class User < ApplicationRecord
    has_secure_password
    
    has_many :likes
    has_many :videos, through: :likes

    validates :name, presence: true
end
