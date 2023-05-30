import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/auth/pages/LoginPage.vue'
import LandingPage from '@/landing/pages/LandingPage.vue'
import ClientPanel from '../client_panel/pages/ClientPanel.vue'
import AccountPage from '../client_panel/pages/AccountPage.vue'
import TimetablePage from '../client_panel/pages/TimetablePage.vue'
import CodeStep from '@/onboarding/pages/CodeStep.vue'
import PersonalDetailsStep from '@/onboarding/pages/PersonalDetailsStep.vue'
import MembershipType from '@/onboarding/pages/MembershipType.vue'
import CardStep from '@/onboarding/pages/CardStep.vue'
import OnboardingSummary from '@/onboarding/pages/SummaryStep.vue'
import RegisterPage from '@/auth/pages/RegisterPage.vue'
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
      path: '/register',
      name: 'Register',
      component: RegisterPage,
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
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/onboarding/code',
      name: 'OnboardingCode',
      component: CodeStep,
    },
    {
      path: '/onboarding/personal-details',
      name: 'OnboardingPersonalDetails',
      component: PersonalDetailsStep,
    },
    {
      path: '/onboarding/membership-type',
      name: 'OnboardingMembershipType',
      component: MembershipType,
    },
    {
      path: '/onboarding/card',
      name: 'OnboardingCard',
      component: CardStep,
    },
    {
      path: '/onboarding/summary',
      name: 'OnboardingSummary',
      component: OnboardingSummary,
    }
  ]
})

export default router