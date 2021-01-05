<template>
  <div>
    <ul class="ms-list">
      <li class="ms-item" v-for="item in songListData" :key="item.id">
        <div class="ms-item-box">
          <!-- 音乐封面 -->
          <div class="ms-cover">
            <router-link :to="{ path: '/songlist', query: { id: item.id, timestamp: new Date().getTime() } }">
              <!-- 封面照片 -->
              <img class="cover-pic" :src="item.coverImgUrl" :alt="item.name" />
              <!-- 封面遮罩 -->
              <i class="cover-mask"></i>
              <!-- 播放图标 -->
              <i class="cover-icon"></i>
            </router-link>
          </div>
          <!-- 音乐描述 -->
          <h4 class="ms-desc">{{ item.name }}</h4>
          <!-- 音乐播放量 -->
          <div class="play-count">播放量：{{ formatCount(item.playCount) }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { utils } from '@/mixins/utils'
export default {
  props: {
    songListData: Array
  },
  mixins: [utils]
}
</script>

<style lang="scss" scoped>
.ms-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .ms-item {
    width: 19%;
    padding-bottom: 20px;
    overflow: hidden;
    font-size: 14px;
  }
  .ms-item-box {
    // margin-right: 20px;
  }
}
// 封面
.ms-cover {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 8px;

  // 封面照片
  .cover-pic {
    width: 100%;
    height: 100%;
    transform: scale(1) translateZ(0);
    transition: transform 0.75s;
  }
  &:hover .cover-pic {
    transform: scale(1.07) translateZ(0);
    transition: transform 0.75s;
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
    transition: opacity 0.5s;
  }
  &:hover .cover-mask {
    opacity: 0.2;
    transition: opacity;
    transition-duration: 0.5s;
  }
  // 播放图标
  .cover-icon {
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
  &:hover .cover-icon {
    opacity: 1;
    transform: scale(1) translateZ(0);
    transition-property: opacity, transform;
    transition-duration: 0.5s;
  }
}
// 描述
.ms-desc {
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
</style>
