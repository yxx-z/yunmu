<template>
  <div>
    <RouterView />
    <van-tabbar route class="tabbar">
      <van-tabbar-item
        fixed
        replace
        v-for="menu in getMenus"
        :key="menu.name"
        :to="menu.path"
        :icon="(menu.meta?.icon as string)"
        >{{ menu.meta?.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { useRouteStore } from '@/stores/modules/route.ts';
import { computed } from 'vue';

const routeStore = useRouteStore();
const getMenus = computed(() => {
  console.log('菜单', routeStore.menus[0].children);
  return routeStore.menus[0].children;
});
</script>

<style lang="scss" scoped></style>
