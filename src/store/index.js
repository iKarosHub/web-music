import Vue from 'vue'
import Vuex from 'vuex'
import config from './config'
import song from './song'
import comments from './comments'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { config, song, comments }
})
