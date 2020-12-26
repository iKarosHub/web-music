import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入重置样式
import '@/assets/scss/reset.scss'

// 引入Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
