<template>
  <el-drawer
    title="播放列表"
    :visible="isShowPlayList"
    direction="rtl"
    size="300px"
    :modal="false"
    :show-close="false"
    @close="closePlayList"
  >
    <template v-slot:title>
      <h1 style="text-align: center; font-size: 24px; font-weight: 700; letter-spacing: 10px;">播放列表</h1>
    </template>
    <el-table :data="playList" :row-class-name="activeRow" @cell-dblclick="dblClickPlayList">
      <el-table-column property="name" label="歌曲"></el-table-column>
      <el-table-column property="ar[0].name" label="歌手" width="100"></el-table-column>
    </el-table>
  </el-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
import { song } from '@/mixins/song'
export default {
  mixins: [song],
  data() {
    return {
      playListData: []
    }
  },
  computed: {
    ...mapGetters(['isShowPlayList', 'playList', 'playSongIndex'])
  },
  methods: {
    closePlayList() {
      this.$store.dispatch('setIsShowPlayList', false)
    },
    activeRow({ rowIndex }) {
      if (rowIndex === this.playSongIndex) {
        return 'success-row'
      }
      return ''
    },
    dblClickPlayList({ id }) {
      this.playSong(id)
    }
  }
}
</script>

<style lang="scss" scoped>
.play-list-drawer {
  background-color: #ccc;
  width: 300px;
  height: 700px;
  position: absolute;
  bottom: 80px;
  left: 0;
  box-shadow: 0 0 3px #666;
}
/deep/ :focus {
  outline: 0;
}
.el-drawer__wrapper {
  top: 100px !important;
  bottom: 70px !important;
  /deep/.el-drawer__container {
    top: 10px;
    bottom: 50px;
  }
}
/deep/.el-drawer {
  border-radius: 10px;
}
/deep/.el-drawer__header {
  margin-bottom: 1px;
}
/deep/.el-table {
  padding-bottom: 50px;
  cursor: pointer;
  td {
    padding: 3px 0;
  }
  .cell {
    font-size: 12px;
    padding-right: 0;
  }
}
/deep/.success-row {
  .cell {
    color: red;
  }
}
/deep/.el-drawer__wrapper {
  top: 60px !important;
  bottom: 74px;
}
/deep/.el-drawer.rtl {
  overflow: scroll;
}

/deep/.el-drawer__container ::-webkit-scrollbar {
  display: none;
}
</style>
