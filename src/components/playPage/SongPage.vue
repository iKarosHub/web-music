<template>
  <div class="section_inner song-box" :key="$route.fullPath">
    <!-- 歌曲信息 -->
    <div class="song-info" v-if="songInfo.al">
      <!-- 歌曲封面 -->
      <div class="song-cover" @click="clickPlaySong(songInfo.id)">
        <img class="song-pic" :src="songInfo.al.picUrl" :alt="songInfo.al.name" />
        <!-- 封面遮罩 -->
        <i class="cover-mask"></i>
        <!-- 播放图标 -->
        <i class="cover-icon-play"></i>
      </div>
      <!-- 歌曲详情 -->
      <div class="song-detail">
        <!-- 歌曲名 -->
        <h3 class="song-name">{{ songInfo.name }}</h3>

        <!-- 歌曲简介 -->
        <div class="song-about">
          <!-- 歌手 -->
          <div class="song-artist">
            <span>{{ '歌手 : ' + songInfo.ar[0].name }}</span>
          </div>
          <!-- 所属歌曲 -->
          <div class="song-company">
            <span>{{ '所属专辑 : ' + songInfo.al.name }}</span>
          </div>
          <!-- 歌词 -->
          <div ref="songDescRef" class="song-desc" :style="{ height: descHeight + 'px', 'margin-top': '10px' }">
            <span class="desc-text">{{ formatLyric(songLyric) }}</span>
          </div>
          <div>
            <el-button size="mini" @click="showDesc" class="desc-btn">{{ isClick }}</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 歌曲评论 -->
    <div class="song-comments">
      <comments></comments>
    </div>
  </div>
</template>

<script>
import { song } from '@/mixins/song'
import { utils } from '@/mixins/utils'
import { mapGetters } from 'vuex'
import Comments from '@/components/comments'
export default {
  mixins: [song, utils],
  components: {
    Comments
  },
  data() {
    return {
      descHeight: 95,
      isClick: '展开'
    }
  },
  computed: {
    ...mapGetters(['songInfo', 'songLyric'])
  },
  mounted() {
    this.getSongDetail(this.$route.query.id)
  },
  methods: {
    showDesc() {
      if (this.isClick === '展开') {
        this.descHeight = this.$refs.songDescRef.scrollHeight
        this.isClick = '收起'
      } else if (this.isClick === '收起') {
        this.descHeight = 95
        this.isClick = '展开'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.song-box {
  margin-top: 40px;
  .song-info {
    display: flex;
    margin-bottom: 35px;
    .song-cover {
      width: 250px;
      height: 250px;
      margin-right: 50px;
      position: relative;
      cursor: pointer;
      // 封面照片
      .song-pic {
        width: 100%;
        height: 100%;
        transform: scale(1) translateZ(0);
        transition: transform 0.75s;
      }
      &:hover .song-pic {
        transform: scale(1.07) translateZ(0);
        transition: transform 0.75s cubic-bezier(0, 1, 0.75, 1);
      }
      // 封面遮罩
      .cover-mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0;
        transform: scale(1) translateZ(0);
        transition-property: opacity, transform;
        transition-duration: 0.75s;
      }
      &:hover .cover-mask {
        opacity: 0.2;
        transform: scale(1.07) translateZ(0);
        transition-property: opacity, transform;
        transition-duration: 0.75s;
      }
      // 播放图标
      .cover-icon-play {
        background-image: url('~@/assets/img/play-btn.png');
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -35px;
        width: 70px;
        height: 70px;
        opacity: 0;
        transform: scale(0.7) translateZ(0);
        transition-property: opacity, transform;
        transition-duration: 0.5s;
      }
      &:hover .cover-icon-play {
        opacity: 1;
        transform: scale(1) translateZ(0);
        transition-property: opacity, transform;
        transition-duration: 0.5s;
      }
    }
    .song-detail {
      flex: 1;
      .song-name {
        font-size: 32px;
        line-height: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 70%;
      }
      .song-creator {
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
      .song-about {
        margin: 10px;
        font-size: 14px;
        color: #666;
        line-height: 25px;
      }
    }
  }
  .song-table {
    margin-bottom: 60px;
  }
  .song-comments {
    margin-bottom: 50px;
    padding: 20px 0;
  }
}

.song-desc {
  height: 95px;
  line-height: 1.7em;
  color: #333;
  overflow: hidden;
  position: relative;
  margin-bottom: 15px;
  span {
    white-space: pre-wrap;
  }
}
</style>
