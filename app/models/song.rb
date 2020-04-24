class Song < ApplicationRecord
  belongs_to :album

  has_many :playlist_songs,    :dependent => :destroy
  has_many :playlist, through: :playlist_songs  

  validates :title, presence: true
  has_one_attached :file
end
