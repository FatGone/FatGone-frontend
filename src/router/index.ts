import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/auth/pages/LoginPage.vue'
import CodeStep from '@/onboarding/pages/CodeStep.vue'
import PersonalDetailsStep from '@/onboarding/pages/PersonalDetailsStep.vue'
import MembershipType from '@/onboarding/pages/MembershipType.vue'
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
    }
  ]
})

export default router
