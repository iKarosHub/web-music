import { request } from './request'
// 评论接口

//歌单评论
export function apiSongListComments(id, limit, offset, before) {
  return request({
    method: 'get',
    url: '/comment/playlist',
    params: {
      id,
      limit,
      offset,
      before
    }
  })
}

// 专辑评论
export function apiAlbumComments(id, limit, offset, before) {
  return request({
    method: 'get',
    url: '/comment/album',
    params: {
      id,
      limit,
      offset,
      before
    }
  })
}

// 歌曲评论
export function apiSongComments(id, limit, offset, before) {
  return request({
    method: 'get',
    url: '/comment/music',
    params: {
      id,
      limit,
      offset,
      before
    }
  })
}
