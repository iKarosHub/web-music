export const utils = {
  methods: {
    // 格式化时间，单位毫秒
    formatTime(timeVal) {
      let theTime = parseInt(timeVal / 1000)
      let result = '' //返回值
      let hour = parseInt(theTime / 3600) //小时
      let minute = parseInt((theTime / 60) % 60) //分
      let second = parseInt(theTime % 60) //秒
      // 小时
      if (hour > 0) {
        if (hour < 10) {
          result = '0' + hour + ':'
        } else {
          result = hour + ':'
        }
      }
      // 分
      if (minute > 0) {
        if (minute < 10) {
          result += '0' + minute + ':'
        } else {
          result += minute + ':'
        }
      } else {
        result += '00:'
      }
      // 秒
      if (second > 0) {
        if (second < 10) {
          result += '0' + second
        } else {
          result += second
        }
      } else {
        result += '00'
      }
      return result
    },
    // 格式化时间，单位秒
    formatSeconds(timeVal) {
      let theTime = parseInt(timeVal)
      let result = '' //返回值
      let hour = parseInt(theTime / 3600) //小时
      let minute = parseInt((theTime / 60) % 60) //分钟
      let second = parseInt(theTime % 60)
      if (hour > 0) {
        if (hour < 10) {
          result = '0' + hour + ':'
        }
      }
      // 分
      if (minute > 0) {
        if (minute < 10) {
          result += '0' + minute + ':'
        } else {
          result += minute + ':'
        }
      } else {
        result += '00:'
      }
      // 秒
      if (second > 0) {
        if (second < 10) {
          result += '0' + second
        } else {
          result += second
        }
      } else {
        result += '00'
      }
      return result
    },
    // 格式化播放量，取整数万位
    formatCount(countNum) {
      let newCount = parseInt(countNum / 10000)
      return newCount + '万'
    },
    // 格式化日期
    formatDate(dateVal, allTime) {
      const dt = new Date(dateVal)

      const y = dt.getFullYear()
      const m = (dt.getMonth() + 1 + '').padStart(2, '0')
      const d = (dt.getDate() + '').padStart(2, '0')

      const hh = (dt.getHours() + '').padStart(2, '0')
      const mm = (dt.getMinutes() + '').padStart(2, '0')
      const ss = (dt.getSeconds() + '').padStart(2, '0')

      // 如果传入第二个参数，则返回详细日期
      if (allTime) {
        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
      }
      // 默认返回年月日
      return `${y}-${m}-${d}`
    },
    // 下载MP3
    // 下载服务器的MP3文件
    downloadMp3(filePath) {
      fetch(filePath)
        .then(res => res.blob())
        .then(blob => {
          const a = document.createElement('a')
          document.body.appendChild(a)
          a.style.display = 'none'
          // 使用获取到的blob对象创建的url
          const url = window.URL.createObjectURL(blob)
          a.href = url
          // 指定下载的文件名
          a.download = this.songName + '-' + this.songArtist + '.mp3'
          a.click()
          document.body.removeChild(a)
          // 移除blob对象的url
          window.URL.revokeObjectURL(url)
        })
    },
    // 格式化歌词
    formatLyric(lyric) {
      var lyricRex = /\[\d*:\d*\.\d*\](\s*)/g
      var newLyric = lyric.replace(lyricRex, '')
      return newLyric
    }
  }
}
