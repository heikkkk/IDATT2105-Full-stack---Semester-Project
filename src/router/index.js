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
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      children: [
        {
          path: '/update-password',
          name: 'update password',
          component: () => import('../components/Profile/UpdatePassword.vue')
        },
        {
          path: '/update-username',
          name: 'update username',
          component: () => import('../components/Profile/UpdateUsername.vue')
        },
        {
          path: '/update-profile-image',
          name: 'update profile image',
          component: () => import('../components/Profile/UpdateProfileImage.vue')
        }
      ]
    }
  ]
})

export default router
