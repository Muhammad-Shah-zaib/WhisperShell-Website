<script setup>
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'

const route = useRoute()

const navItems = [
  { name: 'Home', path: '/', icon: 'mdi:home-outline', activeIcon: 'mdi:home' },
  { name: 'Docs', path: '/docs', icon: 'mdi:file-document-outline', activeIcon: 'mdi:file-document' },
  { name: 'Downloads', path: '/downloads', icon: 'mdi:download-outline', activeIcon: 'mdi:download' }
]

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <div class="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-md">
    <nav class="bg-surface-container-high/90 backdrop-blur-md rounded-full shadow-2xl border border-surface-container-highest py-2 px-8 flex justify-between items-center">
      <router-link
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="flex flex-col items-center gap-1 w-16 transition-colors relative"
        :class="isActive(item.path) ? 'text-primary' : 'text-on-surface-variant hover:text-on-background'"
      >
        <div class="relative">
          <Icon :icon="isActive(item.path) ? item.activeIcon : item.icon" class="w-6 h-6 transition-transform" :class="isActive(item.path) ? 'scale-110' : 'scale-100'" />
          <div v-if="isActive(item.path)" class="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--color-primary),0.8)]"></div>
        </div>
        <span class="text-[10px] font-sans font-medium transition-colors" :class="isActive(item.path) ? 'text-primary' : ''">{{ item.name }}</span>
      </router-link>
    </nav>
  </div>
</template>
