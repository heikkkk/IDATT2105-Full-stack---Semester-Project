import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/sign-up',
      name: 'sign up',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/discover',
      name: 'discover',
      component: () => import('../views/DiscoverView.vue')
    }
  ]
})

export default router
