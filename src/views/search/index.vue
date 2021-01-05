<template>
  <div class="search-page section_inner">
    <song-list-table :songList="songListInfo"></song-list-table>
  </div>
</template>

<script>
import { song } from '@/mixins/song'
import SongListTable from '@/components/playPage/SongListTable'
import { mapGetters } from 'vuex'
export default {
  mixins: [song],
  components: {
    SongListTable
  },
  computed: {
    ...mapGetters(['songListInfo'])
  },
  mounted() {
    this.getSearch(this.$route.query.keywords)
  }
}
</script>

<style lang="scss" scoped></style>
