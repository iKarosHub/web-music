import { request } from './request'

// 推荐相关api
// 最新专辑
export function apiAlbumNewest() {
  return request({
    method: 'get',
    url: '/album/newest'
  })
}
