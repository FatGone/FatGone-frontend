import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/auth/pages/LoginPage.vue'
import LandingPage from '@/landing/pages/LandingPage.vue'
import ClientPanel from '../client_panel/pages/ClientPanel.vue'
import AccountPage from '../client_panel/pages/AccountPage.vue'
import TimetablePage from '../client_panel/pages/TimetablePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: '',
      component: LandingPage,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/panel',
      name: 'Account',
      component: ClientPanel,
      
      children: [
        {
          path: '',
          redirect: 'panel/account'
        },
        {
          path: 'account',
          component: AccountPage,
        },
        {
          path: 'timetable',
          component: TimetablePage,
        }
      ]
    },
  ]
})

export default router