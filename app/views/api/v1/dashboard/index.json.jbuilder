json.recent_albums @recent_albums.each do |album|
  json.id album.id
  json.title album.title
  json.artist_name album.artist.name
  json.cover_url url_for(album.cover)
  json.favorite current_user.is_favorite? 'Album', album.id
end

json.recommended_albums @recommended_albums.each do |album|
  json.id album.id
  json.title album.title
  json.artist_name album.artist.name
  json.cover_url url_for(album.cover)
  json.favorite current_user.is_favorite? 'Album', album.id
end