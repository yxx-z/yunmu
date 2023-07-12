import {defineStore} from 'pinia'
import { useDark, useToggle } from '@vueuse/core';

interface ISetting {

}
export const useSettings = defineStore("setting", {
  state: () => ({
    theme: 'light',
  }),
  actions: {
   
  },
  getters: {}
})