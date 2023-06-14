import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/css/style.scss'

// Vuetify
import 'vuetify/styles'
import createVuetify from './plugins/vuetify';
import { useAuthStore } from './auth/stores/AuthStore'
import { AccountController } from './account/controllers/AccountController'


const vuetify = createVuetify;

const app = createApp(App)


app.use(vuetify)
app.use(createPinia())
app.use(router)

const authStore = useAuthStore();
authStore.loadFromStorage();

if (authStore.isAuthenticated) {
    const accountController = new AccountController();
    await accountController.get();
}

app.mount('#app')


