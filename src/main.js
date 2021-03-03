import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/app.css'

import BaseCard from '@/components/BaseCard.vue'

const app = createApp(App)

app.component('base-card', BaseCard)

app.use(store).use(router).mount('#app')
