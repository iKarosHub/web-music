<template>
  <div>
    <ul class="comment-list">
      <li class="comment-list-item" v-for="item in CommentsData" :key="item.commentId">
        <!-- 头像 -->
        <div class="comment-avatar">
          <img :src="item.user.avatarUrl" alt="" />
        </div>
        <div class="comment-detail">
          <h4 class="comment-user-info">
            <!-- 用户名 -->
            <a href="javascrip:;" class="comment-user-name">{{ item.user.nickname }}</a>
            <span class="vip-icon" v-if="item.user.avatarDetail">
              <img :src="item.user.avatarDetail.identityIconUrl" alt="" />
            </span>
            <span class="vip-level" v-if="item.user.vipRights">
              <img v-if="item.user.vipRights.redVipLevel === 1" src="../../../assets/img/vip1.png" alt="" />
              <img v-else-if="item.user.vipRights.redVipLevel === 2" src="../../../assets/img/vip2.png" alt="" />
              <img v-else-if="item.user.vipRights.redVipLevel === 3" src="../../../assets/img/vip3.png" alt="" />
              <img v-else-if="item.user.vipRights.redVipLevel === 4" src="../../../assets/img/vip4.png" alt="" />
              <img v-else-if="item.user.vipRights.redVipLevel === 5" src="../../../assets/img/vip5.png" alt="" />
              <img v-else src="../../../assets/img/vip6.png" alt="" />
            </span>
          </h4>

          <!-- 评论内容 -->
          <p class="coment-text">{{ item.content }}</p>
          <!-- 回复内容 -->
          <div class="comment-reply" v-if="item.beReplied[0]">
            <a href="javascrip:;" class="replied-username">{{ item.beReplied[0].user.nickname + ' : ' }}</a>
            <p class="replied-content">{{ item.beReplied[0].content }}</p>
          </div>
          <!-- 评论日期、赞、回复 -->
          <div class="comment-opts">
            <!-- 日期 -->
            <span class="comment-date">{{ formatDate(item.time, 'allDate') }}</span>
            <div>
              <!-- 赞 -->
              <a href="#" class="comment-zan">
                <i class="icon-comment icon-zan"></i>
                <span class="comment-zan-count">({{ item.likedCount }})</span>
              </a>
              <!-- 回复 -->
              <a href="#" class="comment-reply-icon">
                <i class="icon-comment icon-reply"></i>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { utils } from '@/mixins/utils'
export default {
  props: {
    CommentsData: Array
  },
  mixins: [utils]
}
</script>

<style lang="scss" scoped>
.comment-list-item {
  padding: 15px 0;
  border-bottom: 1px solid #ededed;
  display: flex;
  .comment-avatar {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .comment-detail {
    flex: 1;
    margin-left: 20px;
  }
  .comment-user-info {
    line-height: 20px;
    .comment-user-name {
      color: #999;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 6px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .vip-icon {
      display: inline-block;
      vertical-align: middle;
      margin-left: 5px;
      width: 16px;
      height: 16px;
    }
    .vip-level {
      display: inline-block;
      vertical-align: middle;
      margin-left: 5px;
      width: 35px;
      height: 12px;
    }
  }

  .coment-text {
    font-size: 14px;
    line-height: 24px;
    text-align: justify;
    color: #333;
  }

  .comment-reply {
    border: 1px solid #ccc;
    background-color: #ededed;
    margin: 10px 0;
    padding: 10px 20px;
    font-size: 14px;
    .replied-username {
      color: #333;
    }
    .replied-content {
      display: inline-block;
      color: #999;
    }
  }
  .comment-opts {
    margin-top: 6px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #999;
    .comment-zan {
      margin: 0 20px;
      .icon-zan {
        margin-right: 5px;
      }
      .comment-zan-count {
        color: #999;
        font-size: 14px;
      }
    }
  }
}
</style>
