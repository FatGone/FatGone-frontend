import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/css/style.scss'

// Vuetify
import 'vuetify/styles'
import createVuetify from './plugins/vuetify';


const vuetify = createVuetify;

const app = createApp(App)


app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
