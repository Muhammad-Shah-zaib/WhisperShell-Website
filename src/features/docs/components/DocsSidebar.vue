<script setup>
import { Icon } from '@iconify/vue'
import { useRoute } from 'vue-router'
import BaseBadge from '@/core/components/BaseBadge.vue'

const route = useRoute()
// ... (rest of script config remains)
const navItems = [
  { name: 'Getting Started', path: '/docs/getting-started', icon: 'mdi:rocket-launch-outline' },
  { name: 'COPR Repository', path: '/docs/copr-support', icon: 'mdi:download-outline' },
  { name: 'Model Config', path: '/docs/model-config', icon: 'mdi:chip' },
  { name: 'Custom Models', path: '/docs/custom-models', icon: 'mdi:tune', badge: 'Soon' },
  { name: 'Hotkeys', path: '/docs/hotkeys', icon: 'mdi:keyboard-outline' },
  { name: 'Troubleshooting', path: '/docs/troubleshooting', icon: 'mdi:wrench-outline' }
]
</script>

<template>
  <aside class="w-full md:w-64 flex-shrink-0 md:border-r border-surface-container-high bg-background p-6">
    <div class="mb-8">
      <h2 class="font-heading text-xl font-bold text-on-background mb-2">Documentation</h2>
      <p class="font-mono text-[10px] text-primary uppercase tracking-widest font-bold mb-2">v1.2.0-STABLE</p>
      <p class="font-sans text-xs text-on-surface-variant italic leading-relaxed">
        Optimized for Wayland. May not function as expected on legacy X11 desktops.
      </p>
    </div>

    <nav class="space-y-2">
      <router-link
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="flex items-center justify-between px-4 py-3 rounded-lg transition-colors font-sans text-sm font-medium w-full"
        :class="route.path === item.path ? 'bg-surface-container-high text-primary' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-background'"
      >
        <div class="flex items-center space-x-3">
          <Icon :icon="item.icon" class="w-5 h-5" />
          <span>{{ item.name }}</span>
        </div>
        <BaseBadge 
          v-if="item.badge"
          variant="neutral"
          mono
          class="scale-90"
        >
          {{ item.badge }}
        </BaseBadge>
      </router-link>
    </nav>
  </aside>
</template>
