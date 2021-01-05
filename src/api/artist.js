import { request } from './request'

// 歌手相关api
// 歌手分类列表
export function apiArtistList(area = -1, type = -1, initial = -1, limit = 80, offset) {
  return request({
    method: 'get',
    url: '/artist/list',
    params: {
      area,
      type,
      initial,
      limit,
      offset
    }
  })
}

// 歌手部分信息和热门单曲
export function apiArtistDetail(id) {
  return request({
    method: 'get',
    url: '/artists',
    params: { id }
  })
}
