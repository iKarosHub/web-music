<template>
  <div class="section_inner song-list-box" :key="$route.fullPath">
    <!-- 歌单信息 -->
    <div class="song-list-info">
      <!-- 歌单封面 -->
      <div class="song-list-cover">
        <img :src="songListDetail.coverImgUrl" :alt="songListDetail.name" />
      </div>
      <!-- 歌单详情 -->
      <div class="song-list-detail">
        <!-- 歌单名 -->
        <h3 class="song-list-name">{{ songListDetail.name }}</h3>
        <!-- 歌单创建者 ps：此处报错，需先判断获取到创建者信息才渲染 -->
        <div class="song-list-creator" v-if="songListDetail.creator">
          <el-avatar shape="circle" :size="35" fit="fit" :src="songListDetail.creator.avatarUrl"></el-avatar>
          <div class="creator-nickname">{{ songListDetail.creator.nickname }}</div>
          <div class="creator-update" style="font-size: 14px;">
            {{ formatDate(songListDetail.updateTime) + '创建' }}
          </div>
        </div>
        <!-- 歌单简介 -->
        <div class="song-list-about" v-if="songListDetail.tags">
          <!-- 歌单标签 -->
          <div class="song-list-tags" v-if="songListDetail.tags.length">
            标签 :
            <el-tag size="mini" v-for="(item, index) in songListDetail.tags" :key="index" style="margin-right: 5px;">{{
              item
            }}</el-tag>
          </div>
          <!-- 歌曲、播放 数量 -->
          <div class="song-list-count">
            <span>{{ '歌曲 : ' + songListDetail.trackCount }}</span>
          </div>
          <div class="song-list-count">
            <span>{{ '播放 : ' + formatCount(songListDetail.playCount) }}</span>
          </div>
          <!-- 歌单简介 -->
          <div class="song-list-desc" ref="songListDescRef" :style="{ height: descHeight + 'px' }">
            <span>{{ '简介 : ' + songListDetail.description }}</span>
          </div>
          <div>
            <el-button size="mini" @click="showDesc" class="desc-btn">{{ isClick }}</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 歌单区域 -->
    <div class="song-list-table">
      <song-list-table :songList="songListInfo"></song-list-table>
    </div>
    <!-- 提示下载app -->
    <div class="to-down-app">
      <div class="tips">
        <p class="tips-text">查看更多内容，请下载客户端</p>
        <a href="https://music.163.com/#/download" class="down-btn">立刻下载</a>
      </div>
    </div>
    <!-- 歌单评论 -->
    <div class="song-list-comments">
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
      descHeight: 25,
      isClick: '展开'
    }
  },
  computed: {
    ...mapGetters(['songListDetail', 'songListInfo'])
  },
  mounted() {
    this.getSongListDetail(this.$route.query.id)
  },
  methods: {
    showDesc() {
      if (this.isClick === '展开') {
        this.descHeight = this.$refs.songListDescRef.scrollHeight
        this.isClick = '收起'
      } else if (this.isClick === '收起') {
        this.descHeight = 25
        this.isClick = '展开'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.song-list-box {
  margin-top: 40px;
  .song-list-info {
    display: flex;
    margin-bottom: 35px;
    .song-list-cover {
      width: 250px;
      height: 250px;
      margin-right: 50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .song-list-detail {
      flex: 1;
      .song-list-name {
        font-size: 32px;
        line-height: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 70%;
      }
      .song-list-creator {
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
      .song-list-about {
        margin: 10px;
        font-size: 14px;
        line-height: 25px;
        color: #666;
      }
    }
  }
  .song-list-table {
    margin-bottom: 60px;
  }
  .song-list-comments {
    // background-color: #ccc;
    margin-bottom: 50px;
    padding: 20px 0;
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
.song-list-desc {
  height: 30px;
  line-height: 1.7em;
  overflow: hidden;
  position: relative;
  margin-bottom: 15px;
  span {
    white-space: pre-wrap;
  }
}
</style>
