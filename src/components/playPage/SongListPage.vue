<template>
  <div class="section_inner song-list-box" :key="$route.fullPath">
    <!-- 歌单信息 -->
    <div class="song-list-info">
      <!-- 歌单封面 -->
      <div class="song-list-cover">
        <img :src="songDetail.coverImgUrl" :alt="songDetail.name" />
      </div>
      <!-- 歌单详情 -->
      <div class="song-list-detail">
        <!-- 歌单名 -->
        <h3 class="song-list-name">{{ songDetail.name }}</h3>
        <!-- 歌单创建者 ps：此处报错，需先判断获取到创建者信息才渲染 -->
        <div class="song-list-creator" v-if="songDetail.creator">
          <el-avatar shape="circle" :size="35" fit="fit" :src="songDetail.creator.avatarUrl"></el-avatar>
          <div class="creator-nickname">{{ songDetail.creator.nickname }}</div>
          <div class="creator-update" style="font-size: 14px;">{{ formatDate(songDetail.updateTime) + '创建' }}</div>
        </div>
        <!-- 歌单简介 -->
        <div class="song-list-about">
          <!-- 歌单标签 -->
          <div class="song-list-tags">
            标签 :
            <el-tag size="mini" v-for="(item, index) in songDetail.tags" :key="index" style="margin-right: 5px;">{{
              item
            }}</el-tag>
          </div>
          <!-- 歌曲、播放 数量 -->
          <div class="song-list-count" style="margin-top: 5px;">
            <span style="margin-right: 15px;">{{ '歌曲 : ' + songDetail.trackCount }}</span>
            <span>{{ '播放 : ' + formatCount(songDetail.playCount) }}</span>
          </div>
          <!-- 歌单简介 -->
          <div class="song-list-about" style="margin-left: 0; color: #666">简介:{{ songDetail.description }}</div>
        </div>
      </div>
    </div>
    <!-- 歌单区域 -->
    <div class="song-list-table">
      <song-list-table :songList="songList"></song-list-table>
    </div>
    <!-- 歌单评论 -->
    <div class="song-pinglun">评论000000000000000000</div>
  </div>
</template>

<script>
import { song } from '@/mixins/song'
import { utils } from '@/mixins/utils'
import { mapGetters } from 'vuex'
import SongListTable from '@/components/playPage/SongListTable'
export default {
  mixins: [song, utils],
  components: {
    SongListTable
  },
  computed: {
    ...mapGetters(['songDetail', 'songList'])
  },
  mounted() {
    this.getSongListDetail(this.$route.query.id)
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
      }
    }
  }
  .song-list-table {
    margin-bottom: 60px;
  }
  .song-pinglun {
    background-color: orange;
    height: 200px;
  }
}
</style>
