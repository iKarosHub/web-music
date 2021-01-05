<template>
  <div class="music-theme" :key="$route.fullPath">
    <!-- 音乐标题 -->
    <div class="theme-header">
      <h2 class="theme-title">{{ themeTitle }}</h2>
      <div>
        <router-link to="/songlistpage">更多<i class="el-icon-arrow-right"></i></router-link>
      </div>
    </div>

    <!-- 音乐主体 -->
    <ul class="theme-content">
      <li class="music-item" v-for="item in themeData" :key="item.id">
        <!-- 音乐封面 -->
        <div class="music-cover">
          <router-link :to="{ path: '/songlist', query: { id: item.id, timestamp: new Date().getTime() } }">
            <!-- 封面照片 -->
            <img class="cover-pic" :src="item.picUrl" :alt="item.name" />
            <!-- 封面遮罩 -->
            <i class="cover-mask"></i>
            <!-- 播放图标 -->
            <i class="cover-icon-play"></i>
          </router-link>
        </div>
        <!-- 音乐描述 -->
        <h4 class="music-desc">{{ item.name }}</h4>
        <!-- 音乐播放量 -->
        <div class="play-count">播放量：{{ formatCount(item.playCount) }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { utils } from '@/mixins/utils'
export default {
  props: {
    themeTitle: String,
    themeData: Array
  },
  mixins: [utils]
}
</script>

<style lang="scss" scoped>
.music-theme {
  padding: 20px 0;
  // background-color: blue;

  .theme-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #ff1d12;

    .theme-title {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 10px;
      padding: 5px 0;
      color: #333;
    }
  }

  .theme-content {
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .music-item {
      width: 19%;
      padding-bottom: 20px;
      overflow: hidden;
      font-size: 14px;
    }
  }
  // 封面
  .music-cover {
    margin-bottom: 8px;
    position: relative;
    cursor: pointer;

    // 封面照片
    .cover-pic {
      width: 100%;
      height: 100%;
      -webkit-transform: scale(1) translateZ(0);
      -webkit-transition: -webkit-transform 0.75s;
    }
    &:hover .cover-pic {
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
  // 描述
  .music-desc {
    line-height: 22px;
    max-height: 44px;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 限制在一个块元素显示的文本的行数 */
    -webkit-box-orient: vertical; /* 垂直排列 */

    cursor: pointer;
  }
  // 播放量/歌手
  .play-count,
  .music-artist {
    height: 22px;
    line-height: 22px;
    color: #999;
    // 超出隐藏
    overflow: hidden;
    // 不进行换行
    white-space: nowrap;
    // 超出显示省略号
    text-overflow: ellipsis;
  }
}
</style>
