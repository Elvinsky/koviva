import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue';
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
  optimizeDeps: {
    exclude: ['vue3-carousel']
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
