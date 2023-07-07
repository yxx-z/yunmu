import { defineStore } from "pinia";
import {type RouteRecordRaw } from "vue-router";

interface IRouteState {
  menus: RouteRecordRaw[],
  routers: RouteRecordRaw[],
}

export const useRouteStore = defineStore('route', {
  state: (): IRouteState => ({
    menus: [],
    routers: [],
  }),
  actions: {
    setMenus(menus: RouteRecordRaw[]) {
      this.menus = menus;
    }
  }
})