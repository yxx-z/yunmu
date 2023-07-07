<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="zoom-fade" mode="out-in">
      <div v-if="Component">
        <component :is="Component" />
      </div>
    </Transition>
  </RouterView>
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
