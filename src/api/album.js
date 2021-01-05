import { request } from './request'

// 推荐相关api
// 最新专辑
export function apiAlbumNewest() {
  return request({
    method: 'get',
    url: '/album/newest'
  })
}

// 专辑详情
export function apiAlbumDetail(id) {
  return request({
    method: 'get',
    url: '/album/detail',
    params: { id }
  })
}

// 获取专辑歌单
export function apiAlbumSongList(id) {
  return request({
    method: 'get',
    url: '/album',
    params: {
      id
    }
  })
}
