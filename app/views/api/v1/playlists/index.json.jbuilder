json.playlists @playlists.each do |playlist|
  json.id playlist.id
  json.name playlist.name

  json.songs playlist.songs.each do |song|
    json.id song.album.id
    json.name song.title
    json.musicSrc url_for(song.file)
    json.singer song.album.artist.name
    json.cover url_for(song.album.cover)
    json.paused false
  end
  
end