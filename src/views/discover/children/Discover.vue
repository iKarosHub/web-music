<template>
  <div>
    <!-- 横幅 -->
    <banner :bannersDate="bannerList"></banner>
    <!-- 歌单推荐 -->
    <rcmd-song-list themeTitle="推荐歌单" :themeData="rcmdSongList"></rcmd-song-list>
    <!-- 新歌首发 -->
    <new-song :songData="newSongList"></new-song>
    <!-- 排行榜 -->
    <top-list :topListData="topList"></top-list>
  </div>
</template>

<script>
import Banner from '@/components/banner'
import RcmdSongList from '@/components/musicTheme/RcmdSongList'
import NewSong from '@/components/musicTheme/NewSong'
import TopList from '@/components/musicTheme/TopList'
// api
import { apiDiscoverData } from '@/api/discover'
import { apiRcmdSong } from '@/api/rcmd'
import { apiSongNew } from '@/api/song'
import { apiAlbumNewest } from '@/api/album'
import { apiTopList } from '@/api/toplist'
export default {
  components: {
    Banner,
    RcmdSongList,
    NewSong,
    TopList
  },
  data() {
    return {
      // 横幅数据
      bannerList: [],
      // 推荐歌单数据
      rcmdSongList: [],
      // 新歌首发数据
      newSongList: [],
      // 最新专辑数据
      newAlbumList: [],
      // 排行榜数据
      topList: []
    }
  },
  created() {
    // 获取发现音乐页面数据
    this.getDiscoverData()
  },
  methods: {
    // 获取discover数据
    getDiscoverData() {
      // 获取discover 横幅数据
      apiDiscoverData().then(res => {
        // console.log(res.data)
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取首页数据失败')
        }
        this.bannerList = res.data.blocks[0].extInfo.banners
        // console.log(this.bannersData)
      })
      // 获取推荐歌单数据
      apiRcmdSong(10).then(res => {
        // console.log(res.data)
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取推荐歌单失败')
        }
        this.rcmdSongList = res.result
      })
      // 获取新歌首发数据
      apiSongNew().then(res => {
        // console.log(res.data)
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取新歌数据失败！')
        }
        this.newSongList = res.data.slice(0, 9)
      })
      // 获取新碟首发数据
      apiAlbumNewest().then(res => {
        // console.log(res.data)
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取新碟数据失败！')
        }
        this.newAlbumList = res.albums.slice(0, 10)
      })
      // 获取排行榜数据
      apiTopList().then(res => {
        // console.log(res.data)
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取排行榜数据失败！')
        }
        this.topList = res.list.slice(0, 4)
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
