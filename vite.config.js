import { fileURLToPath, URL } from 'node:url'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';

import vue from '@vitejs/plugin-vue';
import { dirname, resolve } from 'node:path';

import vueJsx from '@vitejs/plugin-vue-jsx';

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
  preprocessorOptions: {
    scss: {
      additionalData: `
        @use "./src/styles/basics/_media.scss" as *;
        @use "./src/styles/basics/_mixins.scss" as *;
      `,
    },
  },
},
  plugins: [
    vue(),
    vueJsx(),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/**'),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
