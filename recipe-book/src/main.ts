import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import localStoragePlugin from './plugins/localStoragePlugin'


const pinia = createPinia()

function ourPlugin(){
    return {
        secret: 'Dummy'
    }
}

pinia.use(ourPlugin)
pinia.use(localStoragePlugin)


createApp(App)
.use(router)
.use(pinia)
.mount('#app')


