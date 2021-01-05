<template>
  <div class="section_inner album-box" :key="$route.fullPath">
    <!-- 专辑信息 -->
    <div class="album-info">
      <!-- 专辑封面 -->
      <div class="album-cover">
        <img :src="albumInfo.picUrl" :alt="albumInfo.name" />
      </div>
      <!-- 专辑详情 -->
      <div class="album-detail">
        <!-- 专辑名 -->
        <h3 class="album-name">{{ albumInfo.name }}</h3>

        <!-- 专辑简介 -->
        <div class="album-about">
          <!-- 歌曲、播放 数量 -->
          <div class="album-artist" v-if="albumInfo.artist">
            <span>{{ '歌手 : ' + albumInfo.artist.name }}</span>
          </div>
          <div class="album-time">
            <span>{{ '发行时间 : ' + formatDate(albumInfo.publishTime) }}</span>
          </div>
          <!-- 专辑发行公司 -->
          <div class="album-company">
            <span>{{ '发行公司 : ' + albumInfo.company }}</span>
          </div>
          <!-- 专辑简介 -->
          <div ref="albumDescRef" class="album-desc" :style="{ height: descHeight + 'px' }">
            <span class="desc-text">{{ '简介 : ' + albumInfo.description }}</span>
          </div>
          <div>
            <el-button size="mini" @click="showDesc" class="desc-btn">{{ isClick }}</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 歌单区域 -->
    <div class="album-table">
      <song-list-table :songList="albumSongList"></song-list-table>
    </div>
    <!-- 提示下载app -->
    <div class="to-down-app">
      <div class="tips">
        <p class="tips-text">查看更多内容，请下载客户端</p>
        <a href="https://music.163.com/#/download" class="down-btn">立刻下载</a>
      </div>
    </div>
    <!-- 专辑评论 -->
    <div class="album-comments">
      <comments></comments>
    </div>
  </div>
</template>

<script>
import { song } from '@/mixins/song'
import { utils } from '@/mixins/utils'
import { mapGetters } from 'vuex'
import SongListTable from '@/components/playPage/SongListTable'
import Comments from '@/components/comments'
export default {
  mixins: [song, utils],
  components: {
    SongListTable,
    Comments
  },
  data() {
    return {
      descHeight: 70,
      isClick: '展开'
    }
  },
  computed: {
    ...mapGetters(['albumDetail', 'albumSongList', 'albumInfo'])
  },
  mounted() {
    this.getAlbumDetail(this.$route.query.id)
  },
  methods: {
    showDesc() {
      if (this.isClick === '展开') {
        this.descHeight = this.$refs.albumDescRef.scrollHeight
        this.isClick = '收起'
      } else if (this.isClick === '收起') {
        this.descHeight = 70
        this.isClick = '展开'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.album-box {
  margin-top: 40px;
  .album-info {
    display: flex;
    margin-bottom: 35px;
    .album-cover {
      width: 250px;
      height: 250px;
      margin-right: 50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .album-detail {
      flex: 1;
      .album-name {
        font-size: 32px;
        line-height: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 70%;
      }
      .album-creator {
        margin-top: 10px;
        display: flex;
        align-items: center;
        .el-avatar {
          margin-right: 15px;
        }
        .creator-nickname {
          margin-right: 15px;
        }
        .creator-update {
          color: #666;
        }
      }
      .album-about {
        margin: 10px;
        font-size: 14px;
        color: #666;
        line-height: 25px;
      }
    }
  }
  .album-table {
    margin-bottom: 60px;
  }
  .album-comments {
    // background-color: #ccc;
    margin-bottom: 50px;
    padding: 20px 30px;
  }
}
.to-down-app {
  .tips {
    margin-bottom: 30px;
    .tips-text {
      font-size: 18px;
      color: #000;
      text-align: center;
    }
    .down-btn {
      display: block;
      margin: 20px auto 0;
      width: 175px;
      height: 41px;
      line-height: 41px;
      font-size: 16px;
      color: #fff;
      text-align: center;
      border-radius: 41px;
      cursor: pointer;
      background-image: linear-gradient(90deg, #ff5a4c 0%, #ff1d12 100%);
    }
  }
}
.album-desc {
  height: 70px;
  line-height: 1.7em;
  overflow: hidden;
  position: relative;
  margin-bottom: 15px;
  span {
    white-space: pre-wrap;
  }
}
</style>
