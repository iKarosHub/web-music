<template>
  <div class="login-user">
    <div v-if="isLogin">登录</div>
    <div v-else class="user-img">
      <img src="https://imgo.youxiniao.com/img2019/11/6/10/2019110678996837.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false
    }
  }
}
</script>

<style lang="scss" scoped>
.login-user {
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  font-size: 18px;
  .user-img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
