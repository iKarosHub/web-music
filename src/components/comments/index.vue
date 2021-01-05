<template>
  <div class="comments-box">
    <div class="comments-hd">
      <h3 class="part-tit">
        评论
        <span class="part-tit-desc">共{{ totalComments }}条评论</span>
      </h3>
    </div>
    <!-- 发表评论 -->
    <div class="issue-comments" style="border: 1px solid #ccc; height: 100px; margin-top: 20px;">
      <textarea name="msg" rows="5" placeholder="发表评论" class="ipt-txt"></textarea>
    </div>
    <!-- 精彩评论 -->
    <div class="hot-comments">
      <div class="comment-type-title">
        <h2>精彩评论</h2>
      </div>
      <comments-list :CommentsData="hotComments"></comments-list>
    </div>
    <!-- 最新评论 -->
    <div class="new-comments">
      <div class="comment-type-title">
        <h2>最新评论({{ totalComments }})</h2>
      </div>
      <comments-list :CommentsData="newComments"></comments-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CommentsList from '@/components/comments/children/CommentsList'
export default {
  components: {
    CommentsList
  },
  computed: {
    ...mapGetters(['totalComments', 'hotComments', 'newComments'])
  }
}
</script>

<style lang="scss" scoped>
.comments-box {
  .comments-hd {
    height: 50px;
    border-bottom: 3px solid #ff1d12;
    clear: both;
    .part-tit {
      font-size: 24px;
      font-weight: 400;
      line-height: 50px;
      .part-tit-desc {
        margin-left: 12px;
        font-size: 14px;
        color: #666;
      }
    }
  }
  .ipt-txt {
    width: 100%;
    height: 100%;
    padding: 0;
    outline: none;
    border: none;
    resize: none;
  }
  .hot-comments,
  .new-comments {
    margin-top: 20px;
  }
  .comment-type-title {
    height: 34px;
    line-height: 34px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ededed;
    letter-spacing: 3px;
    font-size: 16px;
  }
}
</style>
