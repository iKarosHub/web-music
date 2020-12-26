import { request } from './request'

// 排行榜相关api
// 所有榜单内容摘要
export function apiTopList() {
  return request({
    method: 'get',
    url: '/toplist/detail'
  })
}
