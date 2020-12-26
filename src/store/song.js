const song = {
  state: {
    songDetail: {}, //歌单详情
    songListAllId: '', //歌单所有歌曲id
    songList: [], //歌单列表
    playSongInfo: {
      songId: '', //歌曲id
      songUrl: '', //歌曲地址
      songTime: 0, //歌曲总时间
      curTime: 0, //当前播放事件
      changeTime: 0, //指定播放时间
      songName: '', //歌曲名称
      songArtist: '', //歌曲歌手
      songPicUrl: '', //歌曲图片地址
      playState: false, //播放状态：暂停、播放
      autoNext: true, //自动触发播放下一首
      volume: 50 //音量
    }
  },
  getters: {
    songDetail: state => {
      let songDetail = state.songDetail
      if (!songDetail) {
        songDetail = JSON.parse(window.sessionStorage.getItem('songDetail') || null)
      }
      return songDetail
    },
    songList: state => {
      let songList = state.songList
      if (!songList) {
        songList = JSON.parse(window.sessionStorage.getItem('songList') || null)
      }
      return songList
    },
    songListAllId: state => {
      let songListAllId = state.songListAllId
      if (!songListAllId) {
        songListAllId = JSON.parse(window.sessionStorage.getItem('songListAllId') || null)
      }
      return songListAllId
    },
    songId: state => {
      let songId = state.playSongInfo.songId
      if (!songId) {
        songId = JSON.parse(window.sessionStorage.getItem('songId') || null)
      }
      return songId
    },
    songUrl: state => {
      let songUrl = state.playSongInfo.songUrl
      if (!songUrl) {
        songUrl = JSON.parse(window.sessionStorage.getItem('songUrl') || null)
      }
      return songUrl
    },
    songTime: state => {
      let songTime = state.playSongInfo.songTime
      if (!songTime) {
        songTime = JSON.parse(window.sessionStorage.getItem('songTime') || null)
      }
      return songTime
    },
    curTime: state => {
      let curTime = state.playSongInfo.curTime
      if (!curTime) {
        curTime = JSON.parse(window.sessionStorage.getItem('curTime') || null)
      }
      return curTime
    },
    changeTime: state => {
      let changeTime = state.playSongInfo.changeTime
      if (!changeTime) {
        changeTime = JSON.parse(window.sessionStorage.getItem('changeTime') || null)
      }
      return changeTime
    },
    songName: state => {
      let songName = state.playSongInfo.songName
      if (!songName) {
        songName = JSON.parse(window.sessionStorage.getItem('songName') || null)
      }
      return songName
    },
    songArtist: state => {
      let songArtist = state.playSongInfo.songArtist
      if (!songArtist) {
        songArtist = JSON.parse(window.sessionStorage.getItem('songArtist') || null)
      }
      return songArtist
    },
    songPicUrl: state => {
      let songPicUrl = state.playSongInfo.songPicUrl
      if (!songPicUrl) {
        songPicUrl = JSON.parse(window.sessionStorage.getItem('songPicUrl') || null)
      }
      return songPicUrl
    },
    playState: state => {
      let playState = state.playSongInfo.playState
      if (!playState) {
        playState = JSON.parse(window.sessionStorage.getItem('playState') || null)
      }
      return playState
    },
    autoNext: state => {
      let autoNext = state.playSongInfo.autoNext
      if (!autoNext) {
        autoNext = JSON.parse(window.sessionStorage.getItem('autoNext') || null)
      }
      return autoNext
    },
    volume: state => {
      let volume = state.playSongInfo.volume
      if (!volume) {
        volume = JSON.parse(window.sessionStorage.getItem('volume') || null)
      }
      return volume
    }
  },
  mutations: {
    setSongDetail: (state, songDetail) => {
      state.songDetail = songDetail
      window.sessionStorage.setItem('songDetail', JSON.stringify(songDetail))
    },
    setSongList: (state, songList) => {
      state.songList = songList
      window.sessionStorage.setItem('songList', JSON.stringify(songList))
    },
    setSongListAllId: (state, songListAllId) => {
      state.songListAllId = songListAllId
      window.sessionStorage.setItem('songListAllId', JSON.stringify(songListAllId))
    },
    setSongId: (state, songId) => {
      state.playSongInfo.songId = songId
      window.sessionStorage.setItem('songId', JSON.stringify(songId))
    },
    setSongUrl: (state, songUrl) => {
      state.playSongInfo.songUrl = songUrl
      window.sessionStorage.setItem('songUrl', JSON.stringify(songUrl))
    },
    setSongTime: (state, songTime) => {
      state.playSongInfo.songTime = songTime
      window.sessionStorage.setItem('songTime', JSON.stringify(songTime))
    },
    setCurTime: (state, curTime) => {
      state.playSongInfo.curTime = curTime
      window.sessionStorage.setItem('curTime', JSON.stringify(curTime))
    },
    setChangeTime: (state, changeTime) => {
      state.playSongInfo.changeTime = changeTime
      window.sessionStorage.setItem('changeTime', JSON.stringify(changeTime))
    },
    setSongName: (state, songName) => {
      state.playSongInfo.songName = songName
      window.sessionStorage.setItem('songName', JSON.stringify(songName))
    },
    setSongArtist: (state, songArtist) => {
      state.playSongInfo.songArtist = songArtist
      window.sessionStorage.setItem('songArtist', JSON.stringify(songArtist))
    },
    setSongPicUrl: (state, songPicUrl) => {
      state.playSongInfo.songPicUrl = songPicUrl
      window.sessionStorage.setItem('songPicUrl', JSON.stringify(songPicUrl))
    },
    setPlayState: (state, playState) => {
      state.playSongInfo.playState = playState
      window.sessionStorage.setItem('playState', JSON.stringify(playState))
    },
    setAutoNext: (state, autoNext) => {
      state.playSongInfo.autoNext = autoNext
      window.sessionStorage.setItem('autoNext', JSON.stringify(autoNext))
    },
    setVolume: (state, volume) => {
      state.playSongInfo.volume = volume
      window.sessionStorage.setItem('volume', JSON.stringify(volume))
    }
  },
  actions: {
    setSongUrl: ({ commit }, songUrl) => {
      commit('setSongUrl', songUrl)
    }
  }
}

export default song
