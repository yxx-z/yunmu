import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import Login from '../views/Login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('../views/Mine/index.vue')
    }
  ]
})

export default router
