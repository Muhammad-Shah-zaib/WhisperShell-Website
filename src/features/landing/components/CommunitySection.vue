<script setup>
import { Icon } from '@iconify/vue'
import BaseButton from '@/core/components/BaseButton.vue'
import { APP_NAME } from '@/core/constants'
</script>

<template>
  <section class="w-full py-24 bg-surface-container border-t border-surface-container-high">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background text-on-background mb-8 shadow-xl border border-surface-container-highest">
        <Icon icon="mdi:github" class="w-8 h-8" />
      </div>

      <h2 class="font-heading text-3xl sm:text-4xl font-bold text-on-background mb-4">
        Open Source &amp; Community Driven
      </h2>
      <p class="font-sans text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
        If you want to collaborate to keep {{ APP_NAME }} alive, active, and help scale it to other Linux distributions, you are more than welcome to contribute on GitHub.
      </p>

      <BaseButton href="https://github.com/Muhammad-Shah-zaib/WhisperShell" target="_blank" variant="secondary" class="!bg-on-background !text-background hover:opacity-90 transition-opacity">
        <span class="flex items-center space-x-2">
          <span>Star on GitHub</span>
          <Icon icon="mdi:star-outline" class="w-4 h-4" />
        </span>
      </BaseButton>

    </div>
  </section>
</template>
