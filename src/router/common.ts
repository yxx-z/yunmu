import {type RouteRecordRaw} from 'vue-router';
export const routerCommonList: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "登录",
    component: () => import("@/views/Login/index.vue"),
    meta: {},
  }
]