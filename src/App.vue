<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app" class="flex justify-center items-center p1">
    <RouterView />
  </div>
</template>

<style>
@import 'normalize.css';
#app {
  /* 抗锯齿， 可以让字体更清晰 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
