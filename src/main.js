import './styles/global.css'
import { createPinia, storeToRefs } from 'pinia';
import { i18Instance } from '@/i18n';


import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App);


app.use(createPinia());

app.use(i18Instance);

app.mount('#app')
