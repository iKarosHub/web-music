import { apiSongListDetail, apiSongDetail, apiSongUrl } from '@/api/song'
export const song = {
  methods: {
    // 获取歌单详情
    getSongListDetail(id) {
      // 获取歌单详情，id: 歌单id
      apiSongListDetail(id).then(res => {
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取歌单详情失败！')
        }
        // 保存歌单详情
        this.$store.commit('setSongDetail', res.playlist)
        let trackIds = []
        res.playlist.trackIds.map(item => {
          trackIds.push(item.id)
        })
        // 保存歌单所有歌曲id
        let songIds = trackIds.slice(0, 10).join(',')
        this.$store.commit('setSongListAllId', songIds)
        // 获取歌单歌曲信息
        this.getSongDetail(songIds)
      })
    },
    // 获取歌单详情
    getSongDetail(songIds) {
      // 获取歌曲详情
      apiSongDetail(songIds).then(res => {
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取歌曲详情失败！')
        }
        this.$store.commit('setSongList', res.songs)
      })
    },
    // 获取音乐url
    getSongUrl(id) {
      apiSongUrl(id).then(res => {
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取音乐地址失败！')
        }
        this.$store.dispatch('setSongUrl', res.data[0].url)
        // console.log(res.data[0].url)
      })
    },
    // 播放歌曲
    playSong(row) {
      console.log('song list table:', row)
      // 获取音乐地址
      this.getSongUrl(row.id)
      // 保存歌曲id
      this.$store.commit('setSongId', row.id)
      // 保存歌曲名
      this.$store.commit('setSongName', row.name)
      // 保存歌手
      this.$store.commit('setSongArtist', row.ar[0].name)
      // 保存歌曲封面
      this.$store.commit('setSongPicUrl', row.al.picUrl)
      // 保存歌曲时间
      this.$store.commit('setSongTime', row.dt)
    }
  }
}
