<script setup>
import { Icon } from '@iconify/vue'

const features = [
  {
    icon: 'mdi:shield-outline',
    title: 'Wayland Security',
    description: 'Works securely within the strict sandbox constraints of modern Linux distributions. No X11 workarounds needed.'
  },
  {
    icon: 'mdi:server-outline',
    title: 'Offline Models',
    description: 'Your voice data never leaves your machine. Powered by highly optimized, locally-run inference models.'
  },
  {
    icon: 'mdi:keyboard-outline',
    title: 'Global Hotkeys',
    description: 'Configurable system-wide shortcuts summon a minimalist overlay for instant dictation in any application.'
  }
]
</script>

<template>
  <section class="w-full py-24 bg-background border-t border-surface-container">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-on-background">
          Engineered for the Modern Desktop
        </h2>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="feature in features" 
          :key="feature.title"
          class="bg-surface-container-lowest border border-surface-container-high rounded-2xl p-8 hover:bg-surface-container transition-colors duration-300"
        >
          <div class="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-6">
            <Icon :icon="feature.icon" class="w-6 h-6" />
          </div>
          <h3 class="font-heading text-xl font-bold text-on-background mb-3">
            {{ feature.title }}
          </h3>
          <p class="font-sans text-sm text-on-surface-variant leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
