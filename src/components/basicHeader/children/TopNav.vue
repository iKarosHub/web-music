<template>
  <el-menu :default-active="topNavActiveIndex" mode="horizontal" @select="handleSelect">
    <el-menu-item :index="item.path" v-for="(item, index) in topNav" :key="index">{{ item.title }}</el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      topNav: [
        {
          title: '发现音乐',
          path: '/'
        },
        {
          title: '我的音乐',
          path: '/my'
        },
        {
          title: '朋友',
          path: '/friend'
        },
        {
          title: '音乐人',
          path: '/musician'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['topNavActiveIndex'])
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$store.commit('setTopNavActiveIndex', key)
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  margin-left: 20px;
}
.el-menu--horizontal {
  .el-menu-item {
    height: 70px;
    line-height: 70px;
    font-size: 18px;
  }
  .el-menu-item.is-active {
    border-bottom: 3px solid red;
  }
}
</style>
