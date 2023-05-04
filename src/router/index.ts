import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/auth/pages/LoginPage.vue'
import RegistrationPage from '@/auth/pages/Registration/StepThird.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'registration',
      component: RegistrationPage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationPage,
    },
  ],
})

export default router
