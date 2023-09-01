<template>
  <div v-if="dataLoaded">
    <div>
      <van-nav-bar title="乡承" style="height: 50px; background:linear-gradient(to right, #D3D3D3, #808080)"/>
    </div>

    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="我也是有底线的"
      @load="onLoad"
    >
      <van-cell v-for="item in 6" :key="item">
        <van-card class="custom-card" @click="redirectToDetail">
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
                <van-text-ellipsis rows="2" :content="article.content" />
              </div>
              <!-- 发布时间 -->
              <div class="time">{{ article.time }}</div>
            </div>
          </template>
        </van-card>
      </van-cell>
      <van-back-top right="15vw" bottom="10vh"/>
    </van-list>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { NavBar } from 'vant';
import { useRouter } from "vue-router";

const dataLoaded = ref(false);
const fetchData = async () => {
  try {
    // 在此处加载数据
    // await yourAsyncDataLoadingFunction();
    dataLoaded.value = true;
  } catch (error) {
    console.error('Failed to load data:', error);
  }
};

onMounted(() => {
  // 在组件挂载后加载数据
  fetchData();
});

const article = {
  title: "县城",
  content: "县城是一个碗，我们就是其中的一颗颗米。它与大城市的玉盘珍馐无法抗衡，却是一餐中不可忽略的重要部分。",
  time: "2023-08-30"
};

const router = useRouter()
const redirectToDetail = () => {
  // 使用 $router.push() 导航到当前路径下的 detail 文件夹下的 index.vue 页面
  router.push('/detail');
};

const list = ref([]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (list.value.length >= 0) {
      finished.value = true;
    }
  }, 1000);
}


</script>

<style scoped>
.custom-card {
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

.card-content {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.time {
  font-size: 12px;
  color: #999;
  text-align: right; /* 时间右下角对齐 */
}
</style>
