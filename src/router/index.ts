import { createRouter, createWebHistory } from 'vue-router'

import ClientPanel from '../client_panel/pages/ClientPanel.vue'
import AccountPage from '../client_panel/pages/AccountPage.vue'
import TimetablePage from '../client_panel/pages/TimetablePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
