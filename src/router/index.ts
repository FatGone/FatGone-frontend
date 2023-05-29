import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/auth/pages/LoginPage.vue'
import LandingPage from '@/landing/pages/LandingPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LandingPage,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
  ]
})

export default router