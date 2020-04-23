import Api from './api'

const AlbumService = {
  index: () => Api.get('/dashboard'),
  show:  (id) => Api.get(`/albums/${id}`),
}

export default AlbumService;