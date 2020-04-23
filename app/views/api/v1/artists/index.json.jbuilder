json.artists @artists.each do |artist|
  json.id artist.id
  json.name artist.name
  json.photo_url url_for(artist.photo)
  json.albums artist.albums
  json.favorite current_user.is_favorite? 'Artist', artist.id
end