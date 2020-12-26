<template>
  <div class="music-theme">
    <!-- 音乐标题 -->
    <div class="theme-header">
      <h2 class="music-title">新歌首发</h2>
      <div>更多<i class="el-icon-arrow-right"></i></div>
    </div>

    <!-- 音乐主体 -->
    <ul class="song-content">
      <li class="song-item" v-for="item in songData" :key="item.id">
        <div class="song-item-box">
          <!-- 歌曲封面 -->
          <div class="song-cover">
            <a href="#">
              <!-- 封面照片 -->
              <img class="song-pic" :src="item.album.picUrl" :alt="item.name" />
              <!-- 封面遮罩 -->
              <i class="cover-mask"></i>
              <!-- 播放图标 -->
              <i class="cover-icon-play"></i>
            </a>
          </div>

          <!-- 歌曲信息 -->
          <div class="song-info">
            <!-- 新歌名称 -->
            <h4 class="song-name">{{ item.name }}</h4>
            <!-- 新歌歌手 -->
            <div class="song-artist">{{ item.artists[0].name }}</div>
          </div>

          <!-- 歌曲时长 -->
          <div class="song-time">{{ formatTime(item.duration) }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { utils } from '@/mixins/utils'
export default {
  props: {
    songData: Array
  },
  mixins: [utils]
}
</script>

<style lang="scss" scoped>
.music-theme {
  padding: 20px 0;

  .theme-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid red;

    .music-title {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 10px;
      padding: 5px 0;
      color: #333;
    }
  }

  .song-content {
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .song-item {
      width: 33%;
      display: inline-block;
    }
  }
  .song-item-box {
    position: relative;
    height: 86px;
    overflow: hidden;
    border-top: 1px solid #f2f2f2;
    margin: -1px 30px 13px 0;
    padding-top: 12px;
    font-size: 14px;

    display: flex;
    align-items: center;
  }
  .song-info {
    width: 50%;
    padding-left: 10px;
  }
  // 封面
  .song-cover {
    position: relative;
    cursor: pointer;
    width: 86px;
    height: 86px;

    // 封面照片
    .song-pic {
      width: 100%;
      height: 100%;
      -webkit-transform: scale(1) translateZ(0);
      -webkit-transition: -webkit-transform 0.75s;
    }
    &:hover .song-pic {
      -webkit-transform: scale(1.07) translateZ(0);
      -webkit-transition: -webkit-transform 0.75s cubic-bezier(0, 1, 0.75, 1);
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
      filter: alpha(opacity=0);
      -webkit-transition: opacity 0.5s;
      transition: opacity 0.5s;
    }
    &:hover .cover-mask {
      opacity: 0.2;
      filter: alpha(opacity=20);
      -webkit-transition: opacity 0.5s;
      transition: opacity 0.5s;
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
      transform: scale(0.5) translateZ(0);
      transition-property: opacity, transform;
      transition-duration: 0.5s;
    }
    &:hover .cover-icon-play {
      opacity: 1;
      transform: scale(0.7) translateZ(0);
      transition-property: opacity, transform;
      transition-duration: 0.5s;
    }
  }
  // 歌名
  .song-name {
    line-height: 23px;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    cursor: pointer;
  }
  // 歌手
  .song-artist {
    color: #999;
    // 超出隐藏
    overflow: hidden;
    // 不进行换行
    white-space: nowrap;
    // 超出显示省略号
    text-overflow: ellipsis;
  }
  // 时间
  .song-time {
    color: #666;
    position: absolute;
    right: 0;
  }
}
</style>
