const config = {
  state: {
    // 顶部导航栏激活项
    topNavActiveIndex: '/',
    // 发现音乐导航栏激活项
    discoverNavActiveIndex: 'Discover',
    // 歌单侧边显示
    isShowPlayList: false,
    // 排行榜导航栏激活项
    topListActiveIndex: '19723756'
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
    },
    isShowPlayList: state => {
      let isShowPlayList = state.isShowPlayList
      if (!isShowPlayList) {
        isShowPlayList = JSON.parse(window.sessionStorage.getItem('isShowPlayList') || null)
      }
      return isShowPlayList
    },
    topListActiveIndex: state => {
      let topListActiveIndex = state.topListActiveIndex
      if (!topListActiveIndex) {
        topListActiveIndex = JSON.parse(window.sessionStorage.getItem('topListActiveIndex') || null)
      }
      return topListActiveIndex
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
    },
    setIsShowPlayList: (state, isShowPlayList) => {
      state.isShowPlayList = isShowPlayList
      window.sessionStorage.setItem('isShowPlayList', JSON.stringify(isShowPlayList))
    },
    setTopListActiveIndex: (state, topListActiveIndex) => {
      state.topListActiveIndex = topListActiveIndex
      window.sessionStorage.setItem('topListActiveIndex', JSON.stringify(topListActiveIndex))
    }
  },
  actions: {
    setIsShowPlayList: ({ commit }, isShowPlayList) => {
      commit('setIsShowPlayList', isShowPlayList)
    },
    setTopListActiveIndex: ({ commit }, topListActiveIndex) => {
      commit('setTopListActiveIndex', topListActiveIndex)
    }
  }
}

export default config
