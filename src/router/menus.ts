import {type RouteRecordRaw} from 'vue-router';
import Layout from '@/layout/index.vue'
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
          icon: 'wap-home',
        },
      },
      {
        path: "message",
        name: "Message",
        component: () => import("@/views/Message/index.vue"),
        meta: {
          title: "消息",
          icon: 'chat',
        },
      },
      {
        path: "mine",
        name: "Mine",
        component: () => import("@/views/Mine/index.vue"),
        meta: {
          title: "我的",
          icon: 'manager',
        },
      }
    ]
  }
]