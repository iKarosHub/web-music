<template>
  <div class="toplist-page section_inner">
    <div class="toplist-nav">
      <el-menu :default-active="topListActiveIndex" class="tl-menu" @select="handleSelect">
        <el-menu-item :index="item.id.toString()" v-for="item in topListNav" :key="item.id">
          <div class="tl-cover"><img :src="item.coverImgUrl" :alt="item.name" /></div>
          <div class="tl-text">
            <p class="text-hd">{{ item.name }}</p>
            <p class="text-ud">{{ item.updateFrequency }}</p>
          </div>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="toplist-content">
      <song-list-page></song-list-page>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { song } from '@/mixins/song'
import SongListPage from '@/components/playPage/SongListPage'
export default {
  mixins: [song],
  components: {
    SongListPage
  },
  computed: {
    ...mapGetters(['topListNav', 'topListActiveIndex'])
  },
  mounted() {
    this.getTopList()
    this.getSongListDetail(this.topListActiveIndex)
  },
  methods: {
    handleSelect(key) {
      this.$store.dispatch('setTopListActiveIndex', key)
      this.getSongListDetail(key)
      console.log(key)
    }
  }
}
</script>

<style lang="scss" scoped>
.toplist-page {
  display: flex;
  justify-content: space-between;
  .toplist-nav {
    width: 250px;
  }
  .toplist-content {
    flex: 1;
    padding: 0 30px 30px;
  }
}
.tl-menu {
  border: 1px solid rgb(218, 218, 218);
  .el-menu-item {
    display: flex;
    height: 70px;
    padding: 10px 0;
  }
  .el-menu-item * {
    vertical-align: top;
  }
  .el-menu-item.is-active {
    color: black;
    box-shadow: 0 0 5px #999;
  }
  .tl-cover {
    width: 50px;
    height: 50px;
  }
  .tl-text {
    flex: 1;
    margin-left: 10px;
    .text-hd {
      height: 25px;
      line-height: 25px;
      font-size: 14px;
    }
    .text-ud {
      height: 25px;
      line-height: 25px;
      color: #999;
      font-size: 12px;
    }
  }
}
</style>
