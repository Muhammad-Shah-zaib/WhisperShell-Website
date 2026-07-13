<script setup>
import { APP_NAME } from '@/core/constants'

const hotkeys = [
  {
    title: 'Global Toggle Overlay',
    description: 'Show or hide the transcription overlay from any application.',
    keys: ['Super', 'Y']
  },
  {
    title: 'Start / Stop Recording',
    description: 'Manually trigger the voice capture while the overlay is active.',
    keys: ['Alt', 'S']
  },
  {
    title: 'Cancel Transcription',
    description: 'Discard the current recording and close the overlay.',
    keys: ['Esc']
  }
]
</script>

<template>
  <div class="max-w-4xl">
    
    <h1 class="font-heading text-4xl sm:text-5xl font-bold text-primary mb-6 tracking-tight uppercase">
      HOTKEYS &amp; SHORTCUTS
    </h1>
    
    <p class="font-sans text-lg text-on-surface-variant mb-12 leading-relaxed">
      Master {{ APP_NAME }} with these global and local keyboard shortcuts designed for a seamless Wayland workflow.
    </p>

    <div class="space-y-6 mb-12">
      <!-- Hotkey List -->
      <div 
        v-for="item in hotkeys" 
        :key="item.title"
        class="bg-surface-container-lowest border border-surface-container-high rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between"
      >
        <div class="mb-4 sm:mb-0 pr-4">
          <h3 class="font-sans font-bold text-on-background mb-1">{{ item.title }}</h3>
          <p class="font-sans text-sm text-on-surface-variant leading-relaxed">{{ item.description }}</p>
        </div>
        <div class="flex items-center space-x-2 flex-shrink-0">
          <template v-for="(key, index) in item.keys" :key="index">
            <kbd class="px-3 py-1.5 bg-surface-container border border-surface-container-highest rounded text-sm font-mono text-on-surface font-medium shadow-sm">
              {{ key }}
            </kbd>
            <span v-if="index < item.keys.length - 1" class="text-on-surface-variant font-mono text-sm">+</span>
          </template>
        </div>
      </div>
    </div>

    <!-- Pro Tip -->
    <div class="bg-surface-container-lowest p-6 border-l-4 border-tertiary rounded-r-xl">
      <p class="font-sans text-sm text-on-surface-variant">
        <span class="font-bold text-tertiary">Pro Tip:</span> You can customize these shortcuts in the Settings > Hotkeys menu to avoid conflicts with your desktop environment.
      </p>
    </div>

  </div>
</template>
