import Api from './api'

const PlaylistService = {
  index: () => Api.get('/playlists'),
  show: (id) => Api.get(`/playlists/${id}`),
  create: (id, song) => Api.post(`/playlists/${id}/${song}`),
  destroy: (id, song) => Api.delete(`/playlists/${id}/${song}`)
}

export default PlaylistService;