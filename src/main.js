import './styles/global.css'
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n'


import { createApp } from 'vue'
import App from './App.vue'
import { languages } from './i18n';

const messages = Object.assign(languages)

export const i18n = createI18n({
  legacy: false,
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages
})

const app = createApp(App);


app.use(createPinia());

app.use(i18n)

app.mount('#app')
