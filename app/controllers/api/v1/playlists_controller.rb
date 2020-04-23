class Api::V1::PlaylistsController < ApplicationController
  def index
    @playlists = current_user.playlists
  end

  def show
    @playlist = current_user.playlists.find(params[:id])
  end
  
  def destroy
    actual_playlist = current_user.playlists.find(params[:id])
    song_id = params[:song]
    PlaylistSong.find_by(playlist_id: actual_playlist.id, song_id: song_id).destroy
  end

  def create
    actual_playlist = current_user.playlists.find(params[:id])
    song_id = params[:song]
    PlaylistSong.create(playlist_id: actual_playlist.id, song_id: song_id)
  end
end
