import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/auth/pages/LoginPage.vue'
import RegistrationStepFirst from '@/auth/pages/Registration/StepFirst.vue'
import RegistratioStepSecond from '@/auth/pages/Registration/StepSecond.vue'
import RegistrationStepThird from '@/auth/pages/Registration/StepThird.vue'
import OnboardingPageFirst from '@/auth/pages/Onboarding/StepFirst.vue'
import OnboardingPageSecond from '@/auth/pages/Onboarding/StepSecond.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'SignUp',
      component: RegistrationStepFirst,
    },
    {
      path: '/signup/email_confirmation',
      name: 'registrationStepSecond',
      component: RegistratioStepSecond,
    },
    {
      path: '/signup/personal_data',
      name: 'registrationStepThird',
      component: RegistrationStepThird,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/onboarding',
      name: 'Onboarding',
      component: OnboardingPageFirst,
    },
    {
      path: '/onboarding/card_data',
      name: 'onboardingStepSecond',
      component: OnboardingPageSecond,
    },
  ],
})


export default router
