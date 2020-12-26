import { request } from './request'

// 获取首页数据
export function apiDiscoverData() {
  return request({
    method: 'get',
    url: '/homepage/block/page'
  })
}
