<template>
  <div class="artist-box">
    <div class="al-pic">
      <ul class="al-pic-list">
        <li class="al-pic-item" v-for="item in artistsData.slice(0, 10)" :key="item.id">
          <div class="pic-item-box">
            <router-link
              :to="{ path: '/artist', query: { id: item.id, timestamp: new Date().getTime() } }"
              class="pic-cover"
            >
              <img class="pic-cover-img" :src="item.picUrl" :alt="item.name" />
            </router-link>
            <h3 class="pic-title">
              <router-link :to="{ path: '/artist', query: { id: item.id, timestamp: new Date().getTime() } }">
                {{ item.name }}</router-link
              >
            </h3>
          </div>
        </li>
      </ul>
    </div>
    <ul class="al-txt">
      <li class="al-txt-item" v-for="item in artistsData.slice(10)" :key="item.id">
        <router-link
          class="al-txt-link"
          :to="{ path: '/artist', query: { id: item.id, timestamp: new Date().getTime() } }"
        >
          {{ item.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    artistsData: Array
  }
}
</script>

<style lang="scss" scoped>
.artist-box {
  .al-pic {
    text-align: center;
  }
}
.al-pic-list {
  overflow: hidden;
  margin: 0 -10px;
  .al-pic-item {
    // 外层盒子负责宽高、边距等
    float: left; //每项左浮动
    width: 20%; //每项宽20%
    margin: 10px 0; //上下项间隔
  }
}
.pic-item-box {
  // 内层盒子负责内容
  position: relative;
  margin: 0 10px;
  background-color: #fff;
  min-height: 195px;
  padding: 25px 0;
  &:hover {
    box-shadow: 0 0 10px #ccc;
  }
}
.pic-cover {
  display: block;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  .pic-cover-img {
    display: block;
    object-fit: cover;
  }
}
.pic-title {
  font-size: 16px;
  font-weight: 400;
  margin: 20px 30px 4px;
}

.al-txt {
  overflow: hidden;
  .al-txt-item {
    float: left;
    width: 20%;
  }
  .al-txt-link {
    float: left;
    max-width: 90%;
    font-size: 14px;
    line-height: 36px;
  }
}
</style>
