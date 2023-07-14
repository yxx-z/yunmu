<template>
  <section
    class="m-20px text-center rounded border-1 border-#eee border-solid shadow-sm shadow-cyan-500/50"
  >
    <h3 class="border-#eee border-b-solid border-1">购物车</h3>
    <section class="p-10px min-h-30vh text-xs">
      <div v-for="item in testStore.orderList" :key="item.price">
        <input type="checkbox" />
        <span>名字: {{ item.price }}</span>
        <span>价格: {{ item.price }}</span>
        <span>数量: {{ item.num }}</span>
      </div>
      <div>总计: {{ testStore.getCount }}</div>
    </section>
    <footer class="flex justify-center gap-20px p-10px">
      <van-button type="primary">确 认</van-button>
      <van-button type="primary">取 消</van-button>
    </footer>
  </section>
</template>

<script setup lang="ts">
import { useTestStore } from '@/stores/modules/text';
import { onMounted } from 'vue';

const testStore = useTestStore();
onMounted(() => {
  testStore.initList();
});
</script>
