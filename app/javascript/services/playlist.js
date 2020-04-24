import Api from './api'

const PlaylistService = {
  index: () => Api.get('/playlists'),
  show: (id) => Api.get(`/playlists/${id}`),
  insert_music: (id, song) => Api.post(`/playlists/${id}/${song}`),
  remove_music: (id, song) => Api.delete(`/playlists/${id}/${song}`),
  create_playlist: (name) => Api.post(`/playlists/${name}`),
  destroy_playlist: (id) => Api.delete(`/playlists/${id}`),
}

export default PlaylistService;