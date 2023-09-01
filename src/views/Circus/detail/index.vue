<template>
  <van-nav-bar
    title="标题"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />

  <van-card class="custom-card">
    <template #tags>
      <div class="card-content">
        <van-row align="center">
          <van-col span="5">
            <!-- 用户头像 -->
            <img class="user-avatar" src="https://yxx-1302857646.cos.ap-beijing.myqcloud.com/shuniversity/cf81ff54-db25-4035-a4f3-6afffda90dd0.png" alt="User Avatar" />
          </van-col>
          <van-col span="15">
            <!-- 文章标题 -->
            <div class="title">{{ article.title }}</div>
          </van-col>
        </van-row>
        <!-- 文章内容 -->
        <div class="card-content">
          <van-text-ellipsis rows="5" expand-text="展开" collapse-text="收起" :content="article.content" />
        </div>
        <!-- 发布时间 -->
        <div class="time">{{ article.time }}</div>
      </div>
    </template>
  </van-card>
</template>

<script setup lang="ts">
 const onClickLeft = () => history.back();
const article = {
  title: "县城",
  content: "        县城是一个碗，我们就是其中的一颗颗米。它与大城市的玉盘珍馐无法抗衡，却是一餐中不可忽略的重要部分。\n        簌簌衣巾落枣花，\n        村南村北响缲车。\n        牛衣古柳卖黄瓜。\n        酒困路长惟欲睡，\n        日高人渴漫思茶。\n        敲门试问野人家。",
  time: "2023-08-31"
};
</script>

<style>
.custom-card {
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-content {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center; /* 文章标题居中 */
}

.time {
  font-size: 12px;
  color: #999;
  text-align: right; /* 时间右下角对齐 */
}
</style>