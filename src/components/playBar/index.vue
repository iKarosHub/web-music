<template>
  <div class="play-bar" ref="playbar2" :class="{ 'play-bar-show': !toggleBar }">
    <div @click="toggleBar = !toggleBar" class="play-bar-up">
      <i :class="[toggleBar ? 'el-icon-sunset' : 'el-icon-moon-night']"></i>
    </div>
    <div class="section_inner kongJian">
      <!-- 上一首 -->
      <i class="icon-player icon-prev" @click="prev"></i>
      <!-- 播放或暂停 -->
      <i @click="togglePlayState" :class="[playState ? 'icon-pause' : 'icon-play', 'icon-player']"></i>
      <!-- 下一首 -->
      <i class="icon-player icon-next" @click="next"></i>
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
            <el-slider
              class="time-slider"
              v-model="curLength"
              :show-tooltip="false"
              @change="changeTimeSlider"
            ></el-slider>
          </div>
        </div>
      </div>
      <!-- 收藏 -->
      <i class="icon-player icon-like"></i>
      <!-- 下载 -->
      <i class="icon-player icon-down" @click="downloadMp3(songUrl)"></i>

      <!-- 是否静音 -->
      <i :class="[volume ? 'icon-voice' : 'icon-no-voice', 'icon-player']"></i>
      <div class="voice-progress">
        <el-slider
          class="voice-slider"
          v-model="curVolume"
          :show-tooltip="false"
          @change="changeVolumeSlider"
        ></el-slider>
      </div>
      <i class="icon-player icon-songlist" @click="showPlayList"></i>
    </div>
    <audio
      :src="songUrl"
      ref="audio"
      preload="true"
      @canplay="canPlay"
      @ended="onEnd"
      @timeupdate="updateTime"
      style="position: absolute; top: -80px;"
    ></audio>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { utils } from '@/mixins/utils'
import { song } from '@/mixins/song'
export default {
  mixins: [utils, song],
  data() {
    return {
      toggleBar: true, //显示或隐藏播放栏
      curLength: 0, //当前播放条长度
      curVolume: 50
    }
  },
  computed: {
    ...mapGetters([
      'songPicUrl',
      'songName',
      'songArtist',
      'songTime',
      'curTime',
      'songUrl',
      'songTime',
      'playState',
      'changeTime',
      'volume',
      'autoNext',
      'playList',
      'songId',
      'playSongIndex',
      'isShowPlayList'
    ])
  },
  watch: {
    curTime() {
      // 播放条长度
      this.curLength = (this.curTime / (this.songTime / 1000)) * 100
    },
    //监控播放状态
    playState() {
      let audio = this.$refs.audio
      if (this.playState) {
        // 接着上次播放记录播放
        audio.currentTime = this.curTime
        audio.play()
      } else {
        audio.pause()
      }
    },
    // 监控是否改成播放时间
    changeTime() {
      this.$refs.audio.currentTime = this.changeTime
    },
    // 音量变化
    volume() {
      this.$refs.audio.volume = this.volume
    },
    // 当autoNext发生变化时，代表播放结束，自动播放下一首
    autoNext() {
      this.next()
    }
  },
  methods: {
    // 浏览器获得数据，可以播放了
    canPlay() {
      console.log('can play')
      // 如果有播放记录，则接着上次播放
      if (this.curTime) {
        this.curLength = (this.curTime / (this.songTime / 1000)) * 100
      }
      // 如果是播放状态，则播放歌曲
      if (this.playState) {
        this.$refs.audio.play()
      }
    },
    // 播放结束时
    onEnd() {
      console.log('on end')
      this.$store.commit('setPlayState', true)
      this.$store.commit('setCurTime', 0)
      this.$store.commit('setAutoNext', !this.autoNext)
    },
    // 播放进行中，记录音乐的播放时间
    updateTime() {
      this.$store.commit('setCurTime', this.$refs.audio.currentTime)
    },
    // 监控播放器播放暂停切换
    togglePlayState() {
      if (this.playState) {
        this.$store.commit('setPlayState', false)
      } else {
        this.$store.commit('setPlayState', true)
      }
    },
    // 改变播放时间
    changeTimeSlider(changeVal) {
      // 这里newCurTime是毫秒，要专成秒才能设置播放时间
      let newCurTime = (changeVal * 0.01 * this.songTime) / 1000
      this.$store.dispatch('setChangeTime', newCurTime)
    },
    // 改变音量大小
    changeVolumeSlider(changeVal) {
      // console.log(changeVal)
      this.$store.commit('setVolume', changeVal / 100)
    },
    // 上一曲
    prev() {
      console.log('prev')
      // 歌单中有歌曲并且不止一首
      if (this.playSongIndex != -1 && this.playList.length > 1) {
        // 如果播放的不是第一首歌曲
        if (this.playSongIndex > 0) {
          // 直接返回上一首
          this.$store.commit('setPlaySongIndex', this.playSongIndex - 1)
        } else {
          // 否则是第一首
          // 切换到倒数第一首
          this.$store.commit('setPlaySongIndex', this.playList.length - 1)
        }
        // 因为数据保存到缓存中，所以最后提交播放即可
        this.playSong(this.playList[this.playSongIndex].id)
      }
    },
    // 下一曲
    next() {
      console.log('next')
      // 歌单中有歌曲并且不止一首
      if (this.playSongIndex != -1 && this.playList.length > 1) {
        // 如果播放的不是最后一首歌曲
        if (this.playSongIndex < this.playList.length - 1) {
          // 直接返回下一首
          this.$store.commit('setPlaySongIndex', this.playSongIndex + 1)
        } else {
          // 否则是最后一首
          // 切换到第一首
          this.$store.commit('setPlaySongIndex', 0)
        }
        // 因为数据保存到缓存中，所以最后提交播放即可
        this.playSong(this.playList[this.playSongIndex].id)
      }
    },
    // 点击显示歌单
    showPlayList() {
      if (this.isShowPlayList) {
        this.$store.commit('setIsShowPlayList', false)
      } else {
        this.$store.commit('setIsShowPlayList', true)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
.player-content {
  position: absolute;
  top: 0;
  left: 200px;
  height: 100%;
  width: 55%;
  display: flex;
  .player-img {
    width: 50px;
    height: 50px;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .player-box {
    width: 100%;
    position: relative;
    .player-info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #666;
      height: 30px;
      line-height: 40px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
.voice-progress {
  width: 115px;
  position: absolute;
  top: 18px;
  right: 50px;
}
// 控件样式
.kongJian {
  height: 100%;
  width: 100%;
  .icon-prev,
  .icon-next {
    margin-top: 25px;
  }
  .icon-next {
    margin-left: 45px;
  }
  .icon-play,
  .icon-pause {
    margin-top: 20px;
    margin-left: 45px;
  }
  .icon-like,
  .icon-liked {
    margin-top: 26px;
    margin-left: 62%;
  }
  .icon-down,
  .icon-voice,
  .icon-no-voice,
  .icon-songlist {
    margin-top: 25px;
    margin-left: 30px;
  }

  .icon-songlist {
    margin-top: 25px;
    margin-left: 150px;
  }
}
/deep/.el-slider__runway {
  height: 4px;
  .el-slider__button-wrapper {
    height: auto;
    bottom: -15px;
  }
}
/deep/.el-slider__bar {
  height: 4px;
  background-color: #ff4e4e;
}
/deep/.el-slider__button {
  width: 10px;
  height: 10px;
  border: none;
  background-color: #ff4e4e;
}
</style>
