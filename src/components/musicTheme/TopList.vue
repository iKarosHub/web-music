<template>
  <div class="home-top-list">
    <!-- 音乐标题 -->
    <div class="top-list-header">
      <h2 class="top-list-title">排行榜</h2>
      <div>更多<i class="el-icon-arrow-right"></i></div>
    </div>
    <!-- 排行榜内容 -->
    <ul class="top-list-content">
      <li class="tpl-item" v-for="item in topListData" :key="item.id">
        <div class="tpl-item-box">
          <div class="tpl-cover">
            <!-- 封面 -->
            <img class="tpl-pic" :src="item.coverImgUrl" :alt="item.name" />
            <!-- 更新时间 -->
            <span class="tpl-update">{{ formatDate(item.updateTime) }}更新</span>
            <!-- 播放按钮 -->
            <i class="cover-icon-play"></i>
          </div>
          <ul class="tpl-song-list">
            <li class="song-list-item" v-for="(item2, index2) in item.tracks" :key="index2">
              <div>{{ index2 }} {{ item2.first }}</div>
              <div class="song-list-gs">{{ item2.second }}</div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { utils } from '@/mixins/utils'
export default {
  props: {
    topListData: Array
  },
  mixins: [utils]
}
</script>

<style lang="scss" scoped>
.home-top-list {
  padding: 20px 0;

  .top-list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid red;

    .top-list-title {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 10px;
      padding: 5px 0;
      color: #333;
    }
  }
  .top-list-content {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .tpl-item {
      width: 22%;
      font-size: 14px;
    }
  }
  .tpl-item-box {
    height: 600px;
    background-color: #fff;
    &:hover {
      box-shadow: 0 0 15px #ccc;
    }

    .tpl-cover {
      position: relative;
      .tpl-pic {
        width: 100%;
        height: 100%;
      }
      .tpl-update {
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
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
        cursor: pointer;
      }
    }
    .tpl-song-list {
      position: relative;
      top: 30px;
      left: 30px;
      line-height: 23px;
      .song-list-item {
        margin-bottom: 30px;
      }
      .song-list-gs {
        padding-left: 30px;
        color: rgb(110, 109, 109);
      }
    }
  }
}
</style>
