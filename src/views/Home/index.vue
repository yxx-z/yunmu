<template>
  <div class="container">
    <canvas id="apple" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const canvas = document.querySelector('#apple') as HTMLCanvasElement;
  const context = canvas.getContext('2d');
  const html = document.documentElement;
  const imgCount = 65;
  const cacheList: HTMLImageElement[] = [];
  const currentImg = (index: number) =>
    index < 10
      ? `https://www.apple.com.cn/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/000${index}.png`
      : `https://www.apple.com.cn/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/00${index}.png`;
  const preloadImg = () => {
    for (let i = 1; i < imgCount; i++) {
      const img = new Image();
      img.src = currentImg(i);
      cacheList.push(img);
    }
  };

  const img = new Image();
  img.src = currentImg(1);
  canvas.width = 1440;
  canvas.height = 810;
  img.onload = function () {
    context?.clearRect(0, 0, canvas.width, canvas.height);
    context?.drawImage(img, 0, 0);
  };

  const updateImg = (index: number) => {
    const img = cacheList[index];
    context?.clearRect(0, 0, canvas.width, canvas.height);
    // img.src = currentImg(index);
    context?.drawImage(img, 0, 0);
  };

  window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop;

    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const index = Math.min(imgCount - 1, Math.ceil(scrollFraction * imgCount));
    requestAnimationFrame(() => updateImg(index + 1));
  });

  preloadImg();
});
</script>

<style scoped>
.container {
  height: 500vh;
  background: #000;
}

canvas {
  position: fixed;
  max-width: 100vw;
  max-height: 100vh;
}
</style>
