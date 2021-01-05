import Vue from 'vue'
import VueRouter from 'vue-router'
import basicLayout from '@/views/layout/basicLayout'

Vue.use(VueRouter)

const routes = [
  {
    // 首页
    path: '/',
    name: '首页',
    component: basicLayout,
    children: [
      {
        path: '/',
        name: 'discover-index',
        component: () => import('@/views/discover')
      },
      {
        path: '/songlist',
        name: 'songlistpage',
        component: () => import('@/components/playPage/SongListPage')
      },
      {
        path: '/album',
        name: 'albumpage',
        component: () => import('@/components/playPage/AlbumPage')
      },
      {
        path: '/song',
        name: 'songPage',
        component: () => import('@/components/playPage/SongPage')
      },
      {
        path: '/search',
        name: 'searchPage',
        component: () => import('@/views/search')
      },
      {
        path: '/artist',
        name: '歌手',
        component: () => import('@/views/page/ArtistPage.vue')
      },
      {
        path: '/songlistpage',
        name: '歌单',
        component: () => import('@/views/discover/children/SongList.vue')
      }
    ]
  },
  {
    // 我的音乐
    path: '/my',
    name: '我的音乐',
    component: basicLayout,
    children: [{ path: '/my', name: '我的音乐页面', component: () => import('@/views/myMusic') }]
  }
]

const router = new VueRouter({
  routes
})

export default router
