import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/auth/pages/LoginPage.vue'
import RegistrationPage from '@/auth/pages/Registration/Registration.vue'
import RegistrationStepFirst from '@/auth/pages/Registration/StepFirst.vue'
import RegistratioStepSecond from '@/auth/pages/Registration/StepSecond.vue'
import RegistrationStepThird from '@/auth/pages/Registration/StepThird.vue'
import OnboardingPage from '@/auth/pages/Onboarding/StepFirst.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/registration/:id',
      name: 'registration',
      component: RegistrationStepFirst,
      children: [
        {
          path: 'first',
          name: 'registrationStepFirst',
          component: RegistrationStepFirst,
        },
        {
          path: 'second',
          name: 'registration',
          component: RegistratioStepSecond,
        },
        {
          path: 'third',
          name: 'registrationStepThird',
          component: RegistrationStepThird,
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      component: OnboardingPage,
    },
  ],
})

// router.beforeEach((to, from, next) => {
// //   const authStore = useAuthStore();
// //   if ((to.name == 'login' || to.name == 'registration') && authStore.isAuthenticated) {
//     next({ name: 'registration' });
// //   } else {
// //     next();
// //   }
// });

export default router
