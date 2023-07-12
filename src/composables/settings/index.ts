import { useDark } from '@vueuse/core'

export const isDark = useDark({
  valueDark: 'dark van-theme-dark',
  valueLight: 'light van-theme-light',
})