import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/auth/pages/LoginPage.vue'
import RegistrationPage from '@/auth/pages/Registration/StepSecond.vue'
import OnboardingPage from '@/auth/pages/Onboarding/StepFirst.vue'

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
