<script setup>
import { useRoute } from 'vue-router'
import BaseButton from './BaseButton.vue'
import { APP_NAME } from '@/core/constants'

const route = useRoute()

const navLinks = [
  { name: 'Downloads', path: '/downloads' },
  { name: 'Docs', path: '/docs' }
]
</script>

<template>
  <header class="w-full border-b border-surface-container-high bg-background/80 backdrop-blur-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      <!-- Logo -->
      <div class="flex-shrink-0">
        <router-link to="/" class="flex items-center space-x-3 font-heading text-xl font-bold text-primary tracking-tight">
          <img src="/favicon.svg" alt="Logo" class="w-8 h-8" />
          <span>{{ APP_NAME }}</span>
        </router-link>
      </div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex space-x-8">
        <router-link
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          class="text-sm font-sans font-medium transition-colors"
          :class="route.path === link.path ? 'text-on-background border-b-2 border-primary py-5' : 'text-on-surface-variant hover:text-on-background py-5'"
        >
          {{ link.name }}
        </router-link>
      </nav>

      <!-- CTA -->
      <div class="flex items-center space-x-4">
        <BaseButton v-if="!route.path.startsWith('/docs')" to="/docs/getting-started" variant="primary" class="!px-4 !py-2 text-xs">
          Get Started
        </BaseButton>
      </div>
      
    </div>
  </header>
</template>
