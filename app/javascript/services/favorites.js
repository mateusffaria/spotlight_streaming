import Api from './api'

const FavoriteService = {
  index: () => Api.get('/favorites'),
  create: (kind, id) => Api.post(`/${kind}/${id}/favorite`),
  delete: (kind, id) => Api.delete(`/${kind}/${id}/favorite`)
}

export default FavoriteService;