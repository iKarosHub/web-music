<template>
  <div>
    <!-- 歌单区域 -->
    <el-table :data="songList" style="width: 100%; cursor: pointer" stripe @cell-dblclick="dblClickSongList">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="name" label="歌曲" style="width: 20%;"> </el-table-column>
      <el-table-column prop="ar[0].name" label="歌手" width="250"> </el-table-column>
      <el-table-column prop="al.name" label="专辑"> </el-table-column>
      <el-table-column prop="dt" label="时长" width="100" v-slot="scope">
        <template>
          <div>
            {{ formatTime(scope.row.dt) }}
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { utils } from '@/mixins/utils'
import { song } from '@/mixins/song'
import { mapGetters } from 'vuex'
export default {
  props: {
    songList: Array
  },
  mixins: [utils, song],
  computed: {
    ...mapGetters(['songListIndex'])
  },
  methods: {
    // 默认参数：row
    dblClickSongList({ id }) {
      this.toPlayList(id)
    }
  }
}
</script>

<style lang="scss" scoped></style>
