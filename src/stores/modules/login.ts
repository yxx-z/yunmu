import {  } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
interface ILogin {
  username: string
}

export const useCounterStore = defineStore('counter', () => {
  function login({username}: ILogin) {
    console.log(username + "登录成功")
    router.push('/')
  }

  return {login}
})
