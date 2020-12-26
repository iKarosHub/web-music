const config = {
  state: {
    // 顶部导航栏激活项
    topNavActiveIndex: '/',
    // 发现音乐导航栏激活项
    discoverNavActiveIndex: 'Discover'
  },
  getters: {
    topNavActiveIndex: state => {
      let topNavActiveIndex = state.topNavActiveIndex
      if (!topNavActiveIndex) {
        topNavActiveIndex = JSON.parse(window.sessionStorage.getItem('topNavActiveIndex') || null)
      }
      return topNavActiveIndex
    },
    discoverNavActiveIndex: state => {
      let discoverNavActiveIndex = state.discoverNavActiveIndex
      if (!discoverNavActiveIndex) {
        discoverNavActiveIndex = JSON.parse(window.sessionStorage.getItem('discoverNavActiveIndex') || null)
      }
      return discoverNavActiveIndex
    }
  },
  mutations: {
    setTopNavActiveIndex: (state, topNavActiveIndex) => {
      state.topNavActiveIndex = topNavActiveIndex
      window.sessionStorage.setItem('topNavActiveIndex', JSON.stringify(topNavActiveIndex))
    },
    setDiscoverNavActiveIndex: (state, discoverNavActiveIndex) => {
      state.discoverNavActiveIndex = discoverNavActiveIndex
      window.sessionStorage.setItem('discoverNavActiveIndex', JSON.stringify(discoverNavActiveIndex))
    }
  },
  actions: {}
}

export default config
