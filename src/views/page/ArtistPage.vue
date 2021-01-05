<template>
  <div class="artist-detail section_inner">
    <div class="artist-info">
      <div class="at-cover">
        <img class="cover-pic" :src="artistInfo.picUrl" :alt="artistInfo.name" />
      </div>
      <div class="at-info" v-if="artistInfo.alias">
        <div class="at-name">
          <h1>{{ artistInfo.name }}</h1>
          <h2 style="font-size: 19px; color: #666;">{{ artistInfo.alias[0] }}</h2>
        </div>
        <ul class="at-song-count">
          <li>{{ '单曲 ' + artistInfo.musicSize }}</li>
          <li>{{ '专辑 ' + artistInfo.albumSize }}</li>
          <li>{{ 'MV ' + artistInfo.mvSize }}</li>
        </ul>
        <div class="at-desc">
          <p class="at-desc-txt">{{ artistInfo.briefDesc }}</p>
          <el-popover
            placement="top-start"
            title="歌手简介"
            width="850"
            trigger="hover"
            :visible-arrow="false"
            :content="artistInfo.briefDesc"
          >
            <i slot="reference" style="display: block; margin-top: 10px; cursor: pointer; color: #666;">[展开]</i>
          </el-popover>
        </div>
      </div>
    </div>
    <div class="artist-song">
      <h3 style="font-size: 24px; margin: 15px 0;">热门歌曲</h3>
      <song-list-table :songList="artistHotSong"></song-list-table>
    </div>
  </div>
</template>

<script>
import { apiArtistDetail } from '@/api/artist'
import SongListTable from '@/components/playPage/SongListTable'
export default {
  data() {
    return {
      artistInfo: {}, //歌手信息
      artistHotSong: [] //歌手热门歌曲
    }
  },
  components: {
    SongListTable
  },
  created() {
    this.getArtistDetail()
  },
  methods: {
    getArtistDetail() {
      apiArtistDetail(this.$route.query.id).then(res => {
        console.log(res.data)
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取歌手详情失败！')
        }
        this.artistInfo = res.artist
        this.artistHotSong = res.hotSongs
        this.$store.commit('setSongListInfo', res.hotSongs)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.artist-detail {
  .artist-info {
    margin: 40px 0 35px;
    overflow: hidden;
    .at-cover {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      overflow: hidden;
      float: left;
      .cover-pic {
        object-fit: cover;
      }
    }
    .at-info {
      padding-left: 300px;
      margin-top: 40px;
      margin-bottom: 35px;
    }
  }
  .at-info {
    .at-name {
      font-size: 38px;
    }
    .at-song-count {
      font-size: 20px;
      color: #333;
      overflow: hidden;
      li {
        float: left;
        margin-right: 20px;
        margin-top: 15px;
        margin-bottom: 15px;
      }
    }
    .at-desc {
      height: 5em;
      // overflow: hidden;
      .at-desc-txt {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
