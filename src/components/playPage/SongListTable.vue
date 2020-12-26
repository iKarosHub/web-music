<template>
  <div>
    <!-- 歌单区域 -->
    <el-table :data="songList" style="width: 100%; cursor: pointer" stripe @cell-dblclick="playSong">
      <el-table-column type="index">
        <template v-slot="scope">
          <div>
            {{ (pageNum - 1) * pageSize + scope.$index + 1 }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="歌曲" style="width: 20%;"> </el-table-column>
      <el-table-column prop="ar[0].name" label="歌手" width="150"> </el-table-column>
      <el-table-column prop="al.name" label="专辑"> </el-table-column>
      <el-table-column prop="dt" label="时长" width="100" v-slot="scope">
        <template>
          <div>
            {{ formatTime(scope.row.dt) }}
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器区域 -->
    <el-pagination
      @size-change="handlePageSize"
      @current-change="handlePageNum"
      :current-page="pageNum"
      :page-sizes="[5, 10, 15, 30]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="songList.length"
      background
    >
    </el-pagination>
  </div>
</template>

<script>
import { utils } from '@/mixins/utils'
import { song } from '@/mixins/song'
export default {
  props: {
    songList: Array
  },
  mixins: [utils, song],
  data() {
    return {
      pageNum: 1,
      pageSize: 10,
      songListData: []
    }
  },
  methods: {
    // 每页显示
    handlePageSize(pageSize) {
      this.pageSize = pageSize
      let indexNum = (this.pageNum - 1) * this.pageSize
      this.songListData = this.songList.slice(indexNum, indexNum + this.pageSize)
    },
    // 页码
    handlePageNum(pageNum) {
      this.pageNum = pageNum
      let indexNum = (this.pageNum - 1) * this.pageSize
      this.songListData = this.songList.slice(indexNum, indexNum + this.pageSize)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-pagination {
  margin-top: 15px;
  position: absolute;
  right: 20px;
}
</style>
