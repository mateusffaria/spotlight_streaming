class Api::V1::PlaylistsController < ApplicationController
  def index
    @playlists = current_user.playlists
  end

  def show
    @playlist = current_user.playlists.find(params[:id])
  end
  
  def destroy
    @playlist = current_user.playlists.find(params[:id]).destroy
  end

  def create
    current_user.playlists.create(name: params[:name])
  end

  def add_playlist_song
    actual_playlist = current_user.playlists.find(params[:id])
    song_id = params[:song]
    PlaylistSong.create(playlist_id: actual_playlist.id, song_id: song_id)
  end

  def remove_playlist_song
    actual_playlist = current_user.playlists.find(params[:id])
    song_id = params[:song]
    PlaylistSong.find_by(playlist_id: actual_playlist.id, song_id: song_id).destroy
  end
end
