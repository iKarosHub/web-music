import Vue from 'vue'
import VueRouter from 'vue-router'
import basicLayout from '@/views/layout/basicLayout'

Vue.use(VueRouter)

const routes = [
  {
    // 首页
    path: '/',
    name: 'Home-Page',
    component: basicLayout,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'discover-index',
        component: () => import('@/views/discover')
      },
      {
        path: '/songlistpage',
        name: 'songlistpage',
        component: () => import('@/components/playPage/SongListPage')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
