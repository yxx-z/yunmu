<template>
  <div>
    <div class="bg h-500px -z-19"></div>
    <div
      class="m-20px border-1 border-coolgray backdrop-blur-10px bg-#eee/70 dark:bg-#484848/65 rounded-xl relative -top-150px flex flex-col items-center"
    >
      <div class="border-4 !absolute h-170px w-170px -top-90px">
        <van-image
          round
          width="10rem"
          height="10rem"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </div>
      <section class="m-t-80px w-100% mb-10px">
        <van-cell :border="false" title="个人信息" is-link />
        <van-cell :border="false" title="账号与安全" is-link />
        <van-cell :border="false" title="主题设置" is-link to="/theme" />
        <van-cell :border="false" title="隐私政策" is-link />
        <van-cell :border="false" title="退出登录" is-link />
      </section>
      <!-- <footer
        class="rounded shadow-lg hover:bg-#484848 sm:flex sm:flex-wrap sm:items-center text-center"
      >
        <div class="sm:w-1/2 md:w-1/4">内容</div>
        <div class="sm:w-1/2 md:w-1/4">内容</div>
        <div class="sm:w-1/2 md:w-1/4">内容</div>
        <div class="sm:w-1/2 md:w-1/4">内容</div>
      </footer> -->
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.bg {
  clip-path: inset(0 -55% 0 -55% round 0 0 100% 100%);
  background-size: cover;
}
.bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-image: linear-gradient(180deg, rgba(0, 0, 0, 0), #000); */
  background: no-repeat center top;
  background-image: url('https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg');

  opacity: 0.9;
}
.card {
  margin: 20px;
  border-radius: 15px;
  border: 1px solid #eee;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 70%);
}
.card {
  margin: 20px;
  border-radius: 15px;
  border: 1px solid #4e4a4a;
  backdrop-filter: blur(10px);
  background: rgb(67 66 66 / 64%);
}

.van-cell {
  align-items: center;
  background: transparent;
}
.van-cell:active {
  background-color: var(--van-cell-active-color);
}
</style>
