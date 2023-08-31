<template>
  <div>
    <van-nav-bar title="往事" />
  </div>
  <!-- 搜索框 -->
  <div>
    <van-search
      v-model="value"
      show-action
      label="固始 |"
      shape="round"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
  </div>

  <!-- 下拉刷新 -->
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <template #pulling="props">
      <img
        class="xianglu"
        src="https://img95.699pic.com/video_cover/27/99/57/a_MIBjt5AgtQHY1641279957.jpg!/fw/820"
        :style="{ transform: `scale(${props.distance / 80})` }"
      />
    </template>
    <!-- 释放提示 -->
    <template #loosing>
      <img
        class="xianglu"
        src="https://img95.699pic.com/video_cover/27/99/57/a_MIBjt5AgtQHY1641279957.jpg!/fw/820"
      />
    </template>

    <!-- 加载提示 -->
    <template #loading>
      <img
        class="xianglu"
        src="https://img95.699pic.com/video_cover/27/99/57/a_MIBjt5AgtQHY1641279957.jpg!/fw/820"
      />
    </template>

    <!-- 轮播图 -->
    <div class="lbt">
      <van-swipe :autoplay="3000" lazy-render indicator-color="white">
        <van-swipe-item v-for="item in bannerList" :key="item.id">
          <van-image fit="contain" height="10rem" :src="item.img" alt="">
            <template v-slot:error>加载失败</template>
          </van-image>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 宫格 -->
    <div class="gg">
      <van-grid :column-num="4" icon-size="41px" :gutter="2" :clickable="true" :border="false">
        <van-grid-item :icon="simiaoIcon" text="宗祠" to="" />
        <van-grid-item :icon="jiazuIcon" text="家族" to=""/>
        <van-grid-item :icon="taimiaoIcon" text="太庙" to=""/>
      </van-grid>
    </div>

    <!-- 标签页 -->
    <div>
      <van-tabs v-model:active="active" shrink sticky @click-tab="onClickTab">
        <van-tab title="推荐"></van-tab>
        <van-tab title="致敬"></van-tab>
        <van-tab title="缅怀"></van-tab>
      </van-tabs>
    </div>

  </van-pull-refresh>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { showToast } from 'vant';
import simiaoIcon from '@/assets/iconfont/simiao.png';
import taimiaoIcon from '@/assets/iconfont/taimiao.png';
import jiazuIcon from '@/assets/iconfont/jiazu.png';

// 加载
const loading = ref(false);

// 搜索框
const value = ref('');
const onSearch = (val:string) => showToast(val);
const onCancel = () => showToast('取消');


// 下拉刷新
const onRefresh = () => {
  setTimeout(() => {
    showToast('刷新成功');
    loading.value = false;
  }, 800);
};


// 轮播图
const bannerList = [
  { id: 1, img: 'https://yxx-1302857646.cos.ap-beijing.myqcloud.com/pic/cd2d542d-d2c5-464c-ab08-d6c361afc579.jpeg' },
  { id: 2, img: 'https://yxx-1302857646.cos.ap-beijing.myqcloud.com/pic/b672790f-c58b-40f4-8256-5c83c0f61571.png' },
  { id: 3, img: 'https://yxx-1302857646.cos.ap-beijing.myqcloud.com/pic/cd2d542d-d2c5-464c-ab08-d6c361afc579.jpeg' }
]

// 标签页
const active = ref(0);
const onClickTab = ({ title }:{ title: string }) => showToast(title);
 
// 列表
const finished = ref(false);
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {

    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (list.value.length >= 12) {
      finished.value = true;
    }
  }, 1000);
};

// 分享
const showShare = ref(false);
const options = [
  [
    { name: '微信', icon: 'wechat' },
    { name: '朋友圈', icon: 'wechat-moments' },
    { name: '微博', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' },
  ],
  [
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
    { name: '小程序码', icon: 'weapp-qrcode' },
  ],
];

const onSelect = (option:{ name: string; icon: string }) => {
  showToast(option.name);
  showShare.value = false;
};

// 宫格内数据集合
const list = ref([
  {
    id: 1,
    value: "https://pic.616pic.com/ys_b_img/00/08/06/cYIxVwK8xo.jpg"
  },
  {
    id: 2,
    value: "https://pic.616pic.com/ys_b_img/00/08/06/cYIxVwK8xo.jpg"
  },
  {
    id: 3,
    value: "https://pic.616pic.com/ys_b_img/00/08/06/cYIxVwK8xo.jpg"
  },
  {
    id: 4,
    value: "https://pic.616pic.com/ys_b_img/00/08/06/cYIxVwK8xo.jpg"
  },
  {
    id: 5,
    value: "https://pic.616pic.com/ys_b_img/00/08/06/cYIxVwK8xo.jpg"
  },
  {
    id: 6,
    value: "https://pic.616pic.com/ys_b_img/00/08/06/cYIxVwK8xo.jpg"
  },
  {
    id: 7,
    value: "https://pic.616pic.com/ys_b_img/00/08/06/cYIxVwK8xo.jpg"
  },
  {
    id: 8,
    value: "https://pic.616pic.com/ys_b_img/00/08/06/cYIxVwK8xo.jpg"
  },
  {
    id: 9,
    value: "https://pic.616pic.com/ys_b_img/00/08/06/cYIxVwK8xo.jpg"
  },
  {
    id: 10,
    value: "https://pic.616pic.com/ys_b_img/00/08/06/cYIxVwK8xo.jpg"
  },
  {
    id: 11,
    value: "https://pic.616pic.com/ys_b_img/00/08/06/cYIxVwK8xo.jpg"
  },
  {
    id: 12,
    value: "https://pic.616pic.com/ys_b_img/00/08/06/cYIxVwK8xo.jpg"
  }
  // 可以继续添加更多的数据项
]);

</script>

<style>
.van-toast--text {
  background: rgba(0, 0, 0, 0.7) !important;
}

:root {
  /* --van-nav-bar-background: linear-gradient(to right, #FFE4E1, #FFB6C1); */
  --van-nav-bar-background: linear-gradient(to right, #D3D3D3, #808080);
  --van-nav-bar-height: 60px;
}

.xianglu {
  width: 380px;
  height: 100px;
  margin-top: 8px;
  border-radius: 4px;
}

.gg {
  margin: 2px 0;
}

.lbt {
  margin: 3px 0;
}

</style>
