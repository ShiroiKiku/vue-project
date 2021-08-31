import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
// import './styles/slyle'
// import store from './store'

 
Vue.component("vue-aspect-ratio", VueAspectRatio)

const app = createApp(App)


app.use(router).mount('#app')
