<template>
  <div class="play-bar" ref="playbar2" :class="{ 'play-bar-show': !toggleBar }">
    <div @click="toggleBar = !toggleBar" class="play-bar-up">
      <i :class="[toggleBar ? 'el-icon-sunset' : 'el-icon-moon-night']"></i>
    </div>
    <div class="section_inner kongJian">
      <!-- 上一首 -->
      <i class="btn_prev"></i>
      <!-- 播放或暂停 -->
      <i @click="togglePlatState" :class="[playState ? 'btn_play--pause' : 'btn_play']"></i>
      <!-- 下一首 -->
      <i class="btn_next"></i>
      <div class="player-content">
        <!-- 播放歌曲封面 -->
        <div class="player-img">
          <img :src="songPicUrl" alt="" />
        </div>
        <!-- 播放歌曲信息 -->
        <div class="player-box">
          <div class="player-info">
            <div class="player-song-info">
              <a href="#">{{ songName }}</a> - <a href="#">{{ songArtist }}</a>
            </div>
            <div class="play-song-time">{{ formatSeconds(curTime) }} / {{ formatTime(songTime) }}</div>
          </div>

          <div class="play-progress">
            <el-slider class="time-slider" v-model="curLength" :show-tooltip="false"></el-slider>
          </div>
        </div>
      </div>
      <!-- 收藏 -->
      <i class="btn_like"></i>
      <!-- 下载 -->
      <i class="btn_down"></i>
      <!-- 音量 -->
      <i class="btn_voice"></i>
      <!-- 静音 -->
      <i class="btn_voice--no"></i>
      <div class="voice-progress">
        <el-slider class="voice-slider" v-model="value1" :show-tooltip="false"></el-slider>
      </div>
    </div>
    <audio
      :src="songUrl"
      ref="audio"
      @canplay="canPlay"
      @play="onPlay"
      @pause="onPause"
      @ended="onEnd"
      @waiting="onWaiting"
      @timeupdate="updateTime"
      controls
      style="position: absolute; top: -80px;"
    ></audio>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { utils } from '@/mixins/utils'
export default {
  mixins: [utils],
  data() {
    return {
      toggleBar: true, //显示或隐藏播放栏
      curLength: 0, //当前播放条长度
      value1: 50
    }
  },
  computed: {
    ...mapGetters(['songPicUrl', 'songName', 'songArtist', 'songTime', 'curTime', 'songUrl', 'songTime', 'playState'])
  },
  watch: {
    curTime() {
      // 播放条长度
      this.curLength = (this.curTime / (this.songTime / 1000)) * 100
    },
    //监控播放状态
    playState() {
      this.togglePlay()
    }
  },
  methods: {
    // 浏览器获得数据，可以播放了
    canPlay() {
      console.log('can play')
    },
    onPlay() {
      console.log('on play')
    },
    onPause() {
      console.log('on pause')
    },
    onEnd() {
      console.log('on end')
      this.$store.commit('setPlayState', false)
    },
    onWaiting() {
      console.log('on waiting')
    },
    // 播放音乐时，记录音乐的播放时间
    updateTime() {
      this.$store.commit('setCurTime', this.$refs.audio.currentTime)
    },
    // 控制音乐播放、暂停
    togglePlay() {
      let audio = this.$refs.audio
      if (this.playState) {
        audio.play()
        console.log('播放：', this.playState)
      } else {
        audio.pause()
        console.log('暂停：', this.playState)
      }
    },
    togglePlatState() {
      if (this.playState) {
        this.$store.commit('setPlayState', false)
      } else {
        this.$store.commit('setPlayState', true)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/player.scss';
.play-bar {
  width: 100%;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 0 5px #666;
  transition: all 0.5s;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;
  .play-bar-up {
    position: absolute;
    bottom: 80px;
    left: 20px;
    cursor: pointer;
  }
}
.play-bar-show {
  bottom: -70px;
}
</style>
