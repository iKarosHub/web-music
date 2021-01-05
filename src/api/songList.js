import { request } from './request'

// 歌单相关api
// 所有歌单分类
export function apiSongListCat() {
  return request({
    method: 'get',
    url: '/playlist/catlist'
  })
}

// 调用此接口 , 可获取网友精选碟歌单
export function apiSongListTop(cat, limit, offset) {
  return request({
    method: 'get',
    url: '/top/playlist',
    params: {
      cat,
      limit,
      offset
    }
  })
}
