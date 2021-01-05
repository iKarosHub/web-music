// 评论

const comments = {
  state: {
    // 评论信息
    commentsInfo: {
      // 精彩评论
      hotComments: [],
      // 最新评论
      newComments: [],
      // 评论总数
      totalComments: 0
    }
  },
  getters: {
    hotComments: state => {
      let hotComments = state.commentsInfo.hotComments
      if (!hotComments) {
        hotComments = JSON.parse(window.sessionStorage.getItem('hotComments') || null)
      }
      return hotComments
    },
    newComments: state => {
      let newComments = state.commentsInfo.newComments
      if (!newComments) {
        newComments = JSON.parse(window.sessionStorage.getItem('newComments') || null)
      }
      return newComments
    },
    totalComments: state => {
      let totalComments = state.commentsInfo.totalComments
      if (!totalComments) {
        totalComments = JSON.parse(window.sessionStorage.getItem('totalComments') || null)
      }
      return totalComments
    }
  },
  mutations: {
    setHotComments: (state, hotComments) => {
      state.commentsInfo.hotComments = hotComments
      window.sessionStorage.setItem('hotComments', JSON.stringify(hotComments))
    },
    setNewComments: (state, newComments) => {
      state.commentsInfo.newComments = newComments
      window.sessionStorage.setItem('newComments', JSON.stringify(newComments))
    },
    setTotalComments: (state, totalComments) => {
      state.commentsInfo.totalComments = totalComments
      window.sessionStorage.setItem('totalComments', JSON.stringify(totalComments))
    }
  }
}

export default comments
