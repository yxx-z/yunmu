// 移动端适配
import './utils/resetView';
// 原子化css
import 'virtual:uno.css'
import 'virtual:unocss-devtools'

import 'vant/lib/index.css';

import { createApp } from 'vue'
import { Icon } from 'vant';

import App from './App.vue'
import router from './router'
import pinia from "./stores/store"

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Icon)

app.mount('#app')
