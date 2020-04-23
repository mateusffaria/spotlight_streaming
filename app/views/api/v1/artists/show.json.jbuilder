json.id @artist.id
json.name @artist.name
json.photo_url url_for(@artist.photo)
json.favorite current_user.is_favorite? 'Artist', @artist.id

json.albums @artist.albums.each do |album|
  json.id album.id
  json.title album.title
  json.artist_name album.artist.name
  json.cover_url url_for(album.cover)
  json.favorite current_user.is_favorite? 'Album', album.id
end