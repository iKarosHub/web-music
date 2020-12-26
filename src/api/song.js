import { request } from './request'

// 新碟api
// 新歌首发接口，type: 地区类型 id，对应以下: 全部：0，华语：7，欧美：96，日本：8，韩国：16
export function apiSongNew(type = 7) {
  return request({
    method: 'get',
    url: '/top/song',
    params: {
      type
    }
  })
}

// 获取歌曲详情
export function apiSongDetail(ids) {
  return request({
    method: 'get',
    url: '/song/detail',
    params: {
      ids
    }
  })
}

// 获取歌单详情
export function apiSongListDetail(id) {
  return request({
    method: 'get',
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

// 获取音乐url
export function apiSongUrl(id) {
  return request({
    method: 'get',
    url: '/song/url',
    params: {
      id
    }
  })
}
