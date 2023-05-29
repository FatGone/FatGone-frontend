import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/auth/pages/LoginPage.vue'
import CodeStep from '@/onboarding/pages/CodeStep.vue'
import PersonalDetailsStep from '@/onboarding/pages/PersonalDetailsStep.vue'
import MembershipType from '@/onboarding/pages/MembershipType.vue'
import CardStep from '@/onboarding/pages/CardStep.vue'
import OnboardingSummary from '@/onboarding/pages/SummaryStep.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
