<template>
  <!-- 基础布局 -->
  <section>
    <header>
      <basic-header></basic-header>
    </header>
    <main>
      <keep-alive>
        <router-view :key="$route.fullPath"></router-view>
      </keep-alive>
      <play-list></play-list>
      <play-bar></play-bar>
    </main>
    <footer>
      <basic-footer></basic-footer>
    </footer>
  </section>
</template>

<script>
import BasicHeader from '@/components/basicHeader'
import BasicFooter from '@/components/basicFooter'
import PlayBar from '@/components/playBar'
import PlayList from '@/components/playBar/PlayList'
export default {
  components: {
    BasicHeader,
    BasicFooter,
    PlayBar,
    PlayList
  }
}
</script>

<style lang="scss" scope>
header,
footer {
  padding: 0;
}

main {
  padding: 0;
  background-color: #fafafa;
}
</style>
