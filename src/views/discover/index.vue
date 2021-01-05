<template>
  <div class="dicover-index">
    <div style="width: 100%; background: #fff">
      <el-menu
        :default-active="discoverNavActiveIndex"
        class="discover-nav section_inner"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item :index="item.component" v-for="item in discoverNav" :key="item.path">{{
          item.title
        }}</el-menu-item>
      </el-menu>
    </div>

    <component class="section_inner" :is="componentId"></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Discover from './children/Discover'
import Artist from './children/Artist'
import SongList from './children/SongList'
import TopList from './children/TopList'
export default {
  components: {
    Discover,
    Artist,
    SongList,
    TopList
  },
  computed: {
    ...mapGetters(['discoverNavActiveIndex'])
  },
  data() {
    return {
      // 发现音乐导航栏
      discoverNav: [
        {
          component: 'Discover',
          title: '推荐'
        },
        {
          component: 'TopList',
          title: '排行榜'
        },
        {
          component: 'SongList',
          title: '歌单'
        },
        {
          component: 'Artist',
          title: '歌手'
        }
      ],
      // 动态组件
      componentId: 'discover'
    }
  },
  methods: {
    handleSelect(key) {
      this.$store.commit('setDiscoverNavActiveIndex', key)
      this.componentId = key
    }
  }
}
</script>

<style lang="scss" scoped>
.discover-nav {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.el-menu--horizontal > .el-menu-item {
  font-size: 15px;
  border-bottom: none;
  padding: 0 5vw;
}

.el-menu--horizontal > .el-menu-item.is-active {
  color: red;
  border-bottom: none;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
</style>
