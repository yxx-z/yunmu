import {type RouteRecordRaw} from 'vue-router';
import Layout from '@/layout/index.vue'
import gc from '@/assets/iconfont/gc.png'
import sy from '@/assets/iconfont/sy.png'
import my from '@/assets/iconfont/my.png'
export const routerMenusList: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Home/index.vue"),
        meta: {
          title: "首页",
          icon: sy,
        },
      },
      {
        path: "circus",
        name: "Circus",
        component: () => import("@/views/Circus/index.vue"),
        meta: {
          title: "广场",
          icon: gc,
        },
      },
      {
        path: "mine",
        name: "Mine",
        component: () => import("@/views/Mine/index.vue"),
        meta: {
          title: "我的",
          icon: my,
        },
      }
    ]
  }
]