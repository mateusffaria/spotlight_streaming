json.id @playlist.id
json.name @playlist.name

json.songs @playlist.songs.each do |song|
  json.id song.id
  json.name song.title
  json.musicSrc url_for(song.file)
  json.singer song.album.artist.name
  json.cover url_for(song.album.cover)
end