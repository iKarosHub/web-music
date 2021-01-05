import { apiSongListDetail, apiSongDetail, apiSongUrl, apiSongLyric } from '@/api/song'
import { apiAlbumDetail, apiAlbumSongList } from '@/api/album'
import { apiSongListComments, apiAlbumComments, apiSongComments } from '@/api/comments'
import { apiSearch } from '@/api/search'
import { apiTopList } from '@/api/toplist'
import { mapGetters } from 'vuex'
export const song = {
  computed: {
    ...mapGetters(['songListInfo', 'playList', 'songInfo'])
  },
  methods: {
    // >>>获取歌单详情
    getSongListDetail(id) {
      // 获取歌单详情，id: 歌单id
      apiSongListDetail(id).then(res => {
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取歌单详情失败！')
        }
        // 保存歌单详情(封面、歌单名、创建者等)
        this.$store.commit('setSongListDetail', res.playlist)
        let trackIds = []
        res.playlist.trackIds.map(item => {
          trackIds.push(item.id)
        })
        // 保存歌单所有歌曲id
        let songIds = trackIds.slice(0, 10)
        // 获取歌单歌曲信息
        this.getSongListInfo(songIds.join(','))
        // 获取歌单评论
        this.getSongListComments(id)
      })
    },
    // 获取歌曲详情
    getSongListInfo(songIds) {
      // 获取歌曲详情
      apiSongDetail(songIds).then(res => {
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取歌曲详情失败！')
        }
        this.$store.commit('setSongListInfo', res.songs)
      })
    },
    // 获取音乐url
    getSongUrl(id) {
      apiSongUrl(id).then(res => {
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取音乐地址失败！')
        }
        // 如果没有音乐url，则提示
        if (!res.data[0].url) {
          this.$store.commit('setPlayState', false)
          return this.$message.error('获取音乐地址失败')
        }
        this.$store.commit('setSongUrl', res.data[0].url)
        // console.log(res.data[0].url)
      })
    },
    // 点击歌单时，播放歌曲
    toPlayList(songId) {
      // 1、将点击的歌单替换当前播放的歌单列表（playList）
      this.$store.commit('setPlayList', this.songListInfo)
      // 4、获取点击歌曲的信息
      this.playSong(songId)
    },
    // 获取播放歌曲的信息
    playSong(songId) {
      // 将播放歌曲的id保存
      this.$store.commit('setSongId', songId)
      // 获取歌曲地址
      this.getSongUrl(songId)
      // 获取点击播放歌曲在播放列表中的下标
      let playSongIndex = this.playList.findIndex(item => item.id === songId)
      if (playSongIndex === -1) {
        return this.$message.error('无法播放')
      }
      // 保存播放歌曲下标
      this.$store.dispatch('setPlaySongIndex', playSongIndex)
      // 保存歌曲封面
      this.$store.dispatch('setSongPicUrl', this.playList[playSongIndex].al.picUrl)
      // 保存歌曲名称
      this.$store.dispatch('setSongName', this.playList[playSongIndex].name)
      // 保存歌曲歌手
      this.$store.dispatch('setSongArtist', this.playList[playSongIndex].ar[0].name)
      // 保存歌曲时间
      this.$store.dispatch('setSongTime', this.playList[playSongIndex].dt)
      // 播放歌曲
      this.$store.commit('setPlayState', true)
    },
    // 获取歌单评论
    getSongListComments(id) {
      apiSongListComments(id).then(res => {
        console.log(res.data)
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取歌单评论失败！')
        }
        this.$store.commit('setTotalComments', res.total)
        this.$store.commit('setHotComments', res.hotComments)
        this.$store.commit('setNewComments', res.comments)
      })
    },
    //>>> 获取专辑详情
    getAlbumDetail(id) {
      apiAlbumDetail(id).then(res => {
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取专辑信息失败！')
        }
        // 保存专辑详情
        this.$store.commit('setAlbumDetail', res)
        // 获取专辑歌单
        this.getAlbumSongList(id)
        // 获取专辑评论
        this.getAlbumComments(id)
      })
    },
    // 获取专辑歌单
    getAlbumSongList(id) {
      apiAlbumSongList(id).then(res => {
        // console.log(res.data)
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取专辑歌单失败！')
        }
        // 获取专辑歌单
        this.$store.commit('setAlbumSongList', res.songs)
        // 获取专辑其他信息
        this.$store.commit('setAlbumInfo', res.album)
        console.log(res.album)
      })
    },
    // 获取专辑评论
    getAlbumComments(id) {
      apiAlbumComments(id).then(res => {
        // console.log(res.data)
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取专辑评论失败！')
        }
        this.$store.commit('setTotalComments', res.total)
        this.$store.commit('setHotComments', res.hotComments)
        this.$store.commit('setNewComments', res.comments)
      })
    },
    // >>> 获取歌曲详情（介绍、评论、歌词等等）
    getSongDetail(id) {
      // 获取歌曲详情
      apiSongDetail(id).then(res => {
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取歌曲详情失败！')
        }
        console.log(res.songs[0])
        this.$store.dispatch('setSongInfo', res.songs[0])
        // 获取歌曲评论
        this.getSongComments(id)
        // 获取歌曲歌词
        this.getSongLyric(id)
      })
    },
    // 获取歌曲评论
    getSongComments(id) {
      apiSongComments(id).then(res => {
        // console.log(res.data)
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取歌曲评论失败！')
        }
        this.$store.commit('setTotalComments', res.total)
        this.$store.commit('setHotComments', res.hotComments)
        this.$store.commit('setNewComments', res.comments)
      })
    },
    // 获取歌曲歌词
    getSongLyric(id) {
      apiSongLyric(id).then(res => {
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取歌词数据失败！')
        }
        this.$store.dispatch('setSongLyric', res.lrc.lyric)
      })
    },
    // 点击某个歌曲播放
    clickPlaySong(id) {
      // 判断该歌曲是否在播放列表中，如果不在，则将其添加到播放列表中
      if (!this.playList.some(item => item.id === id)) {
        // 添加歌曲到播放列表中
        this.$store.commit('setPlayListAdd', this.songInfo)
        this.playSong(id)
      }
    },
    // 获取搜索结果
    getSearch(keywords) {
      console.log(keywords)
      apiSearch(keywords).then(res => {
        console.log(res.data)
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('搜索歌曲失败！')
        }
        // 保存搜索的歌曲结果
        this.$store.commit('setSongListInfo', res.result.songs)
      })
    },
    // 获取排行榜单内容摘要
    getTopList() {
      apiTopList().then(res => {
        // console.log(res.data)
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取排行榜数据失败')
        }
        this.$store.dispatch('setTopListNav', res.list)
      })
    }
  }
}
