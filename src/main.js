import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/app.css'
import './assets/css/customStyle.css'

import BaseCard from '@/components/BaseCard.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

const app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-input', BaseInput)
app.component('base-button', BaseButton)

app.use(store).use(router).mount('#app')
