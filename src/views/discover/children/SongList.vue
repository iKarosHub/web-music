<template>
  <div class="song-list section_inner">
    <div class="song-list-detail">
      <music-list :songListData="songListData"></music-list>
    </div>
  </div>
</template>

<script>
import MusicList from '@/components/MusicList'
import { apiSongListCat, apiSongListTop } from '@/api/songList'
export default {
  components: {
    MusicList
  },
  data() {
    return {
      //歌单分类
      songListCat: {
        categories: {}, //主分类
        sub: [] //次分类
      },
      songListData: [] //歌单数据
    }
  },
  created() {
    this.getSongListData()
  },
  methods: {
    getSongListData() {
      // 获取歌单分类
      apiSongListCat().then(res => {
        console.log(res.data)
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取歌单分类失败！')
        }
        this.songListCat.categories = res.categories
        this.songListCat.sub = res.sub
      })
      // 获取歌单指定分类数据，默认：全部
      apiSongListTop('全部', 35).then(res => {
        console.log(res.data)
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取歌单数据失败！')
        }
        this.songListData = res.playlists
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.song-list {
  .song-list-cat {
    background-color: red;
    padding: 60px 0 32px;
  }
}
</style>
