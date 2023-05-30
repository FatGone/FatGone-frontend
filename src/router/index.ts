import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/auth/pages/LoginPage.vue'
import Registration from '@/auth/pages/Registration.vue'
import ClientPanel from '../client_panel/pages/ClientPanel.vue'
import AccountPage from '../client_panel/pages/AccountPage.vue'
import TimetablePage from '../client_panel/pages/TimetablePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration,
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
