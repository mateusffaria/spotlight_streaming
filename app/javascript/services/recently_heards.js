import Api from './api'

const RecentlyHeards = {
  create: (id) => Api.post(`/albums/${id}/recently_heards`),
}

export default RecentlyHeards;