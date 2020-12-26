<template>
  <el-carousel :interval="4000" type="card" height="285px">
    <el-carousel-item v-for="item in bannersDate" :key="item.bannerId">
      <img :src="item.pic" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: {
    bannersDate: Array
  }
}
</script>

<style lang="scss" scoped>
// 整个幻灯片容器
.el-carousel {
  margin-top: 50px;
}
// 幻灯片item
.el-carousel__item {
  width: 60%;
  left: -5.4%;
  img {
    width: 100%;
    height: 100%;
  }
}
// 幻灯片箭头
/deep/.el-carousel__arrow {
  width: 64px;
  height: 64px;
  font-size: 64px;
  line-height: 64px;
}
// 指示器
/deep/.el-carousel__indicators--outside button {
  background-color: red;
}
</style>
