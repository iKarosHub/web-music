<template>
  <!-- header布局 -->
  <ul class="section_inner">
    <li class="header-logo">
      <router-link to="/"><img src="@/assets/img/logo.svg" alt=""/></router-link>
    </li>
    <li>
      <!-- 顶部导航栏区域 -->
      <top-nav></top-nav>
    </li>
    <li>
      <!-- 搜索框 -->
      <search-box> </search-box>
    </li>
    <li class="header-user">
      <!-- 登录、用户 -->
      <login-user></login-user>
    </li>
  </ul>
</template>

<script>
import TopNav from './children/TopNav'
import SearchBox from './children/SearchBox'
import LoginUser from './children/LoginUser'
export default {
  components: {
    TopNav,
    SearchBox,
    LoginUser
  }
}
</script>

<style lang="scss" scoped>
.section_inner {
  height: 70px;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  .header-logo {
    width: 200px;
    height: 100%;
    background-image: linear-gradient(90deg, #ff5a4c 0%, #ff1d12 100%);

    img {
      width: 97%;
      height: 100%;
    }
  }
  .header-user {
    flex: 1;
  }
}
</style>
