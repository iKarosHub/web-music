const song = {
  state: {
    songListDetail: {}, //歌单详情（封面、介绍、歌单列表等）
    songListInfo: [], //歌单中的歌曲信息
    // -----播放列表-----
    playSongIndex: 0, //当前播放的歌曲在歌单中的下标
    playList: [], //播放列表
    //当前播放歌曲的信息
    playSongInfo: {
      songId: '', //歌曲id
      songUrl: '', //歌曲地址
      songTime: 0, //歌曲总时间
      songName: '', //歌曲名称
      songArtist: '', //歌曲歌手
      songPicUrl: '' //歌曲图片地址
    },
    curTime: 0, //当前正在播放时间
    changeTime: 0, //指定播放时间
    playState: false, //播放状态：暂停、播放
    autoNext: true, //自动触发播放下一首
    volume: 50, //音量
    // -----专辑-------
    albumDetail: {}, //专辑详情
    albumSongList: [], //专辑歌单
    albumInfo: {}, //专辑的其他信息
    // ----歌曲--------
    songInfo: {}, //歌曲详情（介绍、歌词、评论等）
    songLyric: '',
    // ----排行榜-------
    topListNav: [], // 排行榜导航栏
    // ----歌单---------
    songListCat: {}, //歌单分类
    songListData: [] //歌单数据
  },
  getters: {
    songListDetail: state => {
      let songListDetail = state.songListDetail
      if (!songListDetail) {
        songListDetail = JSON.parse(window.sessionStorage.getItem('songListDetail') || null)
      }
      return songListDetail
    },
    songListInfo: state => {
      let songListInfo = state.songListInfo
      if (!songListInfo) {
        songListInfo = JSON.parse(window.sessionStorage.getItem('songListInfo') || null)
      }
      return songListInfo
    },
    playSongIndex: state => {
      let playSongIndex = state.playSongIndex
      if (!playSongIndex) {
        playSongIndex = JSON.parse(window.sessionStorage.getItem('playSongIndex') || null)
      }
      return playSongIndex
    },
    playList: state => {
      let playList = state.playList
      if (playList.length === 0) {
        playList = JSON.parse(window.localStorage.getItem('playList') || null)
      }
      return playList
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
      let curTime = state.curTime
      if (!curTime) {
        curTime = JSON.parse(window.sessionStorage.getItem('curTime') || null)
      }
      return curTime
    },
    changeTime: state => {
      let changeTime = state.changeTime
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
      let playState = state.playState
      if (!playState) {
        playState = JSON.parse(window.sessionStorage.getItem('playState') || null)
      }
      return playState
    },
    autoNext: state => {
      let autoNext = state.autoNext
      if (!autoNext) {
        autoNext = JSON.parse(window.sessionStorage.getItem('autoNext') || null)
      }
      return autoNext
    },
    volume: state => {
      let volume = state.volume
      if (!volume) {
        volume = JSON.parse(window.sessionStorage.getItem('volume') || null)
      }
      return volume
    },
    albumDetail: state => {
      let albumDetail = state.albumDetail
      if (!albumDetail) {
        albumDetail = JSON.parse(window.sessionStorage.getItem('albumDetail') || null)
      }
      return albumDetail
    },
    albumSongList: state => {
      let albumSongList = state.albumSongList
      if (!albumSongList) {
        albumSongList = JSON.parse(window.sessionStorage.getItem('albumSongList') || null)
      }
      return albumSongList
    },
    albumInfo: state => {
      return state.albumInfo
    },
    songInfo: state => {
      let songInfo = state.songInfo
      if (!songInfo) {
        songInfo = JSON.parse(window.sessionStorage.getItem('songInfo') || null)
      }
      return songInfo
    },
    songLyric: state => {
      return state.songLyric
    },
    topListNav: state => {
      return state.topListNav
    }
  },
  mutations: {
    setSongListDetail: (state, songListDetail) => {
      state.songListDetail = songListDetail
      window.sessionStorage.setItem('songListDetail', JSON.stringify(songListDetail))
    },
    setSongListInfo: (state, songListInfo) => {
      state.songListInfo = songListInfo
      window.sessionStorage.setItem('songListInfo', JSON.stringify(songListInfo))
    },
    setPlaySongIndex: (state, playSongIndex) => {
      state.playSongIndex = playSongIndex
      window.sessionStorage.setItem('playSongIndex', JSON.stringify(playSongIndex))
    },
    setPlayList: (state, playList) => {
      state.playList = playList
      window.localStorage.setItem('playList', JSON.stringify(playList))
    },
    setPlayListAdd: (state, songInfo) => {
      state.playList.push(songInfo)
      window.localStorage.setItem('playList', JSON.stringify(state.playList))
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
      state.curTime = curTime
      window.sessionStorage.setItem('curTime', JSON.stringify(curTime))
    },
    setChangeTime: (state, changeTime) => {
      state.changeTime = changeTime
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
      state.playState = playState
      window.sessionStorage.setItem('playState', JSON.stringify(playState))
    },
    setAutoNext: (state, autoNext) => {
      state.autoNext = autoNext
      window.sessionStorage.setItem('autoNext', JSON.stringify(autoNext))
    },
    setVolume: (state, volume) => {
      state.volume = volume
      window.sessionStorage.setItem('volume', JSON.stringify(volume))
    },
    setAlbumDetail: (state, albumDetail) => {
      state.albumDetail = albumDetail
      window.sessionStorage.setItem('albumDetail', JSON.stringify(albumDetail))
    },
    setAlbumSongList: (state, albumSongList) => {
      state.albumSongList = albumSongList
      window.sessionStorage.setItem('albumSongList', JSON.stringify(albumSongList))
    },
    setAlbumInfo: (state, albumInfo) => {
      state.albumInfo = albumInfo
      window.sessionStorage.setItem('albumInfo', JSON.stringify(albumInfo))
    },
    setSongInfo: (state, songInfo) => {
      state.songInfo = songInfo
      window.sessionStorage.setItem('songInfo', JSON.stringify(songInfo))
    },
    setSongLyric: (state, songLyric) => {
      state.songLyric = songLyric
    },
    setTopListNav: (state, topListNav) => {
      state.topListNav = topListNav
    }
  },
  actions: {
    setChangeTime: ({ commit }, changeTime) => {
      commit('setChangeTime', changeTime)
    },
    setPlaySongIndex: ({ commit }, playSongIndex) => {
      commit('setPlaySongIndex', playSongIndex)
    },
    setSongName: ({ commit }, songName) => {
      commit('setSongName', songName)
    },
    setSongArtist: ({ commit }, songArtist) => {
      commit('setSongArtist', songArtist)
    },
    setSongTime: ({ commit }, songTime) => {
      commit('setSongTime', songTime)
    },
    setSongPicUrl: ({ commit }, songPicUrl) => {
      commit('setSongPicUrl', songPicUrl)
    },
    setSongInfo: ({ commit }, songInfo) => {
      commit('setSongInfo', songInfo)
    },
    setSongLyric: ({ commit }, songLyric) => {
      commit('setSongLyric', songLyric)
    },
    setTopListNav: ({ commit }, topListNav) => {
      commit('setTopListNav', topListNav)
    }
  }
}

export default song
