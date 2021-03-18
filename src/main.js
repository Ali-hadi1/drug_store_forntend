import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import I18n from './I18n'
import './assets/css/app.css'
import './assets/css/customStyle.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import BaseCard from '@/components/BaseCard.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

const app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-input', BaseInput)
app.component('base-button', BaseButton)

library.add(fas)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store).use(router).mount('#app')
