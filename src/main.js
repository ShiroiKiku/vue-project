import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
// import './styles/slyle'
// import store from './store'

const app = createApp(App)
app.use(router).mount('#app')
