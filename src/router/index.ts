import { createRouter, createWebHistory } from 'vue-router'
import { type App } from 'vue'
import { createRouterGuards } from './router-guards';
import { routerMenusList } from './menus';
import { routerCommonList } from './common';
import pinia from '../stores/store' 
import { useRouteStore } from '@/stores/modules/route';


// 菜单路由存入 pinia
const routeStore = useRouteStore(pinia)
routeStore.setMenus(routerMenusList)


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerCommonList.concat(routerMenusList)
})

export function setupRouter(app: App) {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router);
}

export default router
