<script setup>
import { APP_NAME } from '@/core/constants'
import BaseCodeBlock from '@/core/components/BaseCodeBlock.vue'
import BaseBadge from '@/core/components/BaseBadge.vue'
</script>

<template>
  <div class="max-w-4xl">
    
    <h1 class="font-heading text-5xl sm:text-6xl font-extrabold text-primary mb-8 tracking-tight uppercase">
      HOTKEYS &amp; SHORTCUTS
    </h1>
    
    <p class="font-sans text-lg text-on-surface-variant mb-12 leading-relaxed">
      Configure custom global shortcuts inside your Linux desktop settings to trigger WhisperShell commands system-wide.
    </p>

    <div class="space-y-12">
      <!-- Shortcut 1 - Recommended -->
      <div class="border-b border-surface-container-high pb-8">
        <div class="flex flex-wrap items-center gap-2 mb-4">
          <h3 class="font-sans text-xl sm:text-2xl font-bold text-on-background">1. Toggle Voice Recording Overlay</h3>
          <span class="text-error text-xs font-bold uppercase tracking-wider select-none">RECOMMENDED</span>
        </div>
        <p class="font-sans text-sm text-on-surface-variant leading-relaxed mb-6">
          This is the primary way to use {{ APP_NAME }}. Pressing this hotkey summons the overlay and starts recording your voice. Pressing it again stops recording and types the text.
        </p>
        
        <div class="space-y-4 max-w-2xl">
          <div>
            <span class="block text-primary font-bold text-xs uppercase tracking-wider mb-2">CLI Command:</span>
            <BaseCodeBlock code="whispershell --toggle-recording" />
          </div>
          <p class="font-sans text-sm text-on-surface-variant leading-relaxed">
            <strong>Recommended Keybind:</strong> <kbd class="px-1.5 py-0.5 bg-surface-container border rounded font-mono">Super</kbd> + <kbd class="px-1.5 py-0.5 bg-surface-container border rounded font-mono">Y</kbd>
          </p>
        </div>
      </div>

      <!-- Shortcut 2 - Optional -->
      <div class="pb-8">
        <div class="flex flex-wrap items-center gap-2 mb-4">
          <h3 class="font-sans text-xl sm:text-2xl font-bold text-on-background">2. Toggle Configuration Panel</h3>
          <BaseBadge variant="neutral">Optional</BaseBadge>
        </div>
        <p class="font-sans text-sm text-on-surface-variant leading-relaxed mb-6">
          Quickly opens or closes the configuration menu to adjust settings or download models. You can also open this normally by searching for <strong>WhisperShell</strong> in your applications menu.
        </p>
        
        <div class="space-y-4 max-w-2xl">
          <div>
            <span class="block text-primary font-bold text-xs uppercase tracking-wider mb-2">CLI Command:</span>
            <BaseCodeBlock code="whispershell --toggle-config" />
          </div>
          <p class="font-sans text-sm text-on-surface-variant leading-relaxed">
            <strong>Recommended Keybind:</strong> <kbd class="px-1.5 py-0.5 bg-surface-container border rounded font-mono">Super</kbd> + <kbd class="px-1.5 py-0.5 bg-surface-container border rounded font-mono">Shift</kbd> + <kbd class="px-1.5 py-0.5 bg-surface-container border rounded font-mono">Y</kbd>
          </p>
        </div>
      </div>
    </div>

  </div>
</template>
