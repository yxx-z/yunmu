<template>
  <section
    class="h-screen w-screen p0 m0 animate-direction flex flex-col justify-center items-center"
  >
    <header>
      <h1 class="text-lightblue m-b animate-bounce-alt animate-count-infinite animate-duration-1s">
        登 录
      </h1>
    </header>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div class="m8">
        <van-space direction="vertical" size="1rem" fill>
          <van-button round block type="primary" native-type="submit"> 提交 </van-button>
          <van-button round block> 注册 </van-button>
        </van-space>
      </div>
    </van-form>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCounterStore } from '@/stores/login';

const username = ref('');
const password = ref('');
const { login } = useCounterStore();
const onSubmit = (values: any) => {
  console.log('submit', values);
  login(values);
};
</script>
