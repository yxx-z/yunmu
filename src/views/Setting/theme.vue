<template>
  <div>
    <van-cell title="暗黑模式">
      <template #right-icon> <van-switch v-model="checked" @click="toggle()" /> </template>
    </van-cell>
  </div>
</template>

<script setup lang="ts">
import { useToggle } from '@vueuse/core';
import { ref } from 'vue';
import { isDark } from '../../composables/settings/index';

const checked = ref<boolean>(isDark.value);
const toggle = useToggle(isDark);
</script>
