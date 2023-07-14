<script setup lang="ts">
import { RouterView } from 'vue-router';
// import { isDark } from './composables/settings';
// import { ref, watch } from 'vue';

// const theme = ref('light');
// watch(
//   () => isDark.value,
//   (nv) => {
//     theme.value = nv ? 'dark' : 'light';
//     console.log(theme.value);
//   }
// );
</script>

<template>
  <!-- <van-config-provider :theme="theme"> -->
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in" appear>
      <component :is="Component" />
    </Transition>
  </RouterView>
  <!-- </van-config-provider> -->
</template>

<style>
@import 'normalize.css';
#app {
  /* 抗锯齿， 可以让字体更清晰 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}
</style>
