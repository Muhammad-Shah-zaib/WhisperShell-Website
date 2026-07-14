import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'
import { fileURLToPath, URL } from 'node:url'

const dynamicRoutes = [
  '/',
  '/downloads',
  '/docs/getting-started',
  '/docs/copr-support',
  '/docs/model-config',
  '/docs/custom-models',
  '/docs/hotkeys',
  '/docs/troubleshooting'
]

export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      hostname: 'https://whispershell.tech',
      dynamicRoutes
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
