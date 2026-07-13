import { createApp } from 'vue'
import './core/styles/global.css'
import App from './App.vue'
import router from './core/router'

const app = createApp(App)

app.use(router)

app.mount('#app')
