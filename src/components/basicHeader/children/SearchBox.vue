<template>
  <div class="search-box">
    <el-input placeholder="搜索音乐" v-model="keywords" @keyup.enter.native="goSearch" clearable>
      <i slot="prefix" class="el-icon-search"></i>
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywords: '' //搜索关键字
    }
  },
  methods: {
    // 搜索并跳转到搜索结果页面
    goSearch() {
      console.log('搜索->', this.keywords)
      let timestamp = new Date().getTime()
      this.$router.push({ path: '/search', query: { keywords: this.keywords, timestamp } })
    }
  }
}
</script>

<style lang="scss" scoped>
.search-box {
  margin-left: 8vw;

  /deep/.el-input__inner {
    width: 250px;
    height: 32px;
    border-radius: 16px;
    font-size: 14px;
    color: #585858;
  }
  /deep/.el-input__prefix {
    color: #585858;
    line-height: 32px;
    left: 10px;
  }

  /deep/.el-input__suffix {
    top: -4px !important;
    .el-input__suffix-inner {
      .el-icon-circle-close:before {
        content: '\e79d' !important;
        font-size: 16px;
      }
    }
  }
}
</style>
