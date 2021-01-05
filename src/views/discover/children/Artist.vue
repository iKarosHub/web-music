<template>
  <div class="artist-main">
    <div class="artist-tag">
      <div class="artist-tag-list">
        <ul class="artist-area-list">
          <li
            class="artist-tag-item"
            :class="[artistAreaIndex === index ? 'isActive' : '']"
            v-for="(item, index) in artistArea"
            :key="index"
            @click="selectArea(item.tag, index)"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
      <div class="artist-tag-list">
        <ul class="artist-cat-list">
          <li
            class="artist-tag-item"
            :class="[artistTypeIndex === index ? 'isActive' : '']"
            v-for="(item, index) in artistType"
            :key="index"
            @click="selectType(item.tag, index)"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
      <div class="artist-tag-list">
        <ul class="artist-screens-list">
          <li
            class="artist-tag-item"
            :class="[artistInitialIndex === item.tag ? 'isActive' : '']"
            v-for="item in artistInitial"
            :key="item.tag"
            @click="selectInitial(item.tag)"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
    </div>
    <div class="artist-list">
      <artist-list :artistsData="artistList"></artist-list>
    </div>
  </div>
</template>

<script>
import ArtistList from '@/components/ArtistList'
import { apiArtistList } from '@/api/artist'
export default {
  components: {
    ArtistList
  },
  data() {
    return {
      queryArtist: {
        area: -1,
        type: -1,
        initial: '-1'
      },
      artistList: [], //歌手列表
      artistArea: [
        { label: '全部', tag: -1 },
        { label: '华语', tag: 7 },
        { label: '欧美', tag: 96 },
        { label: '日本', tag: 8 },
        { label: '韩国', tag: 16 },
        { label: '其他', tag: 0 }
      ], //歌手地域标签
      artistType: [
        { label: '全部', tag: -1 },
        { label: '男歌手', tag: 1 },
        { label: '女歌手', tag: 2 },
        { label: '乐队组合', tag: 3 }
      ], //歌手分类
      artistInitial: [
        { label: '热门', tag: '-1' },
        { label: 'A', tag: 'A' },
        { label: 'B', tag: 'B' },
        { label: 'C', tag: 'C' },
        { label: 'D', tag: 'D' },
        { label: 'E', tag: 'E' },
        { label: 'F', tag: 'F' },
        { label: 'G', tag: 'G' },
        { label: 'H', tag: 'H' },
        { label: 'I', tag: 'I' },
        { label: 'J', tag: 'J' },
        { label: 'K', tag: 'K' },
        { label: 'L', tag: 'L' },
        { label: 'M', tag: 'M' },
        { label: 'N', tag: 'N' },
        { label: 'O', tag: 'O' },
        { label: 'P', tag: 'P' },
        { label: 'Q', tag: 'Q' },
        { label: 'R', tag: 'R' },
        { label: 'S', tag: 'S' },
        { label: 'T', tag: 'T' },
        { label: 'U', tag: 'U' },
        { label: 'V', tag: 'V' },
        { label: 'W', tag: 'W' },
        { label: 'X', tag: 'X' },
        { label: 'Y', tag: 'Y' },
        { label: 'Z', tag: 'Z' },
        { label: '#', tag: '0' }
      ], //歌手名筛选
      artistAreaIndex: 0,
      artistTypeIndex: 0,
      artistInitialIndex: '-1'
    }
  },
  mounted() {
    this.getArtistList()
  },
  methods: {
    getArtistList() {
      apiArtistList(this.queryArtist.area, this.queryArtist.type, this.queryArtist.initial).then(res => {
        console.log(res.data)
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取歌手数据失败')
        }
        this.artistList = res.artists
      })
    },
    selectArea(tag, index) {
      this.artistAreaIndex = index
      this.queryArtist.area = tag
      this.getArtistList()
    },
    selectType(tag, index) {
      this.artistTypeIndex = index
      this.queryArtist.type = tag
      this.getArtistList()
    },
    selectInitial(tag) {
      this.artistInitialIndex = tag
      this.queryArtist.initial = tag
      this.getArtistList()
    }
  }
}
</script>

<style lang="scss" scoped>
.artist-main {
  .artist-tag {
    margin: 20px 0 20px;
    padding: 30px 0 17px 40px;
    cursor: pointer;
    font-size: 14px;
  }
}
.artist-tag-list {
  display: flex;
  .artist-area-list,
  .artist-cat-list,
  .artist-screens-list {
    display: flex;
    flex-wrap: wrap;
  }
  .artist-tag-item {
    min-width: 75px;
    height: 26px;
    line-height: 26px;
    padding: 0 12px;
    text-align: center;
    margin: 0 14px 12px 0;
    &:hover {
      color: #ec4141;
      background-color: #fff4f4;
      border-radius: 13px;
    }
  }
  .isActive {
    border-radius: 13px;
    color: #ec4141;
    background-color: #fde7e7;
  }
}
</style>
