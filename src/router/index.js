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

      path: '/playingTF',
      name: 'playing true or false',
      component: () => import('../views/PlayingView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
    },
    {
      path: '/discover',
      name: 'discover',
      component: () => import('../views/DiscoverView.vue')
    },
    {
      path: '/finished',
      name: 'finished',
      component: () => import("../views/GameFinishedView.vue")
    },
    {
      path: '/Profile',
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
          path: '/update-Profile-image',
          name: 'update Profile image',
          component: () => import('../components/Profile/UpdateProfileImage.vue')
        }
      ]
    },
    {
      path: '/create-quiz',
      name: 'create-quiz',
      component: () => import('../views/CreateQuizView.vue'),
      children: [
        {
          path: '/summary',
          name: 'summary',
          component: () => import('../components/CreateQuiz/QuizSummary.vue')
        },
        {
          path: '/create-quiz',
          name: 'questions',
          component: () => import('../components/CreateQuiz/CreateQuiz.vue')
        }
      ]
    },
    {
      path: '/quiz-info',
      name: 'quiz info',
      component: () => import('../views/QuizInfoView.vue')
    }
  ]
})

export default router
