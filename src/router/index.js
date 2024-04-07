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
    },
    {
      path: '/play-quiz',
      name: 'play quiz',
      component: () => import('../views/PlayQuizView.vue')
    },
    {
      path: '/quiz-results',
      name: 'quiz results',
      component: () => import('../components/PlayQuiz/QuizResults.vue')
    },
    {
      path: '/search-result',
      name: 'search-result',
      component: () => import('../views/SearchResultView.vue')
    },
    {
      path: '/about-us',
      name: 'about us',
      component: () => import('../components/AboutUs.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy policy',
      component: () => import('@/components/PrivacyPolicy.vue')
    }
  ]
})

export default router
