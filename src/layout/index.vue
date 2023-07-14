<template>
  <div>
    <RouterView v-slot="{ Component }">
      <Transition name="scale" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <van-tabbar route class="fixed w-screen">
      <van-tabbar-item
        fixed
        replace
        v-for="menu in getMenus"
        :key="menu.name"
        :to="menu.path"
        :icon="(menu.meta?.icon as string)"
      >
        {{ menu.meta?.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { useRouteStore } from '@/stores/modules/route';
import { computed } from 'vue';

const routeStore = useRouteStore();
const getMenus = computed(() => {
  return routeStore.menus[0].children;
});
</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
