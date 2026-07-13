<script setup>
import { Icon } from '@iconify/vue'
import { APP_NAME } from '@/core/constants'
</script>

<template>
  <div class="max-w-4xl">
    
    <h1 class="font-heading text-4xl sm:text-5xl font-bold text-primary mb-6 tracking-tight uppercase">
      MODEL CONFIGURATION
    </h1>
    
    <p class="font-sans text-lg text-on-surface-variant mb-12 leading-relaxed">
      {{ APP_NAME }} requires a local Whisper model for high-performance transcription. Choose the configuration that best fits your hardware capabilities.
    </p>

    <div class="mb-10">
      <div class="flex items-center space-x-3 mb-6">
        <Icon icon="mdi:microphone-outline" class="w-6 h-6 text-primary" />
        <h2 class="font-heading text-2xl font-bold text-on-background">Model Configuration</h2>
      </div>
      
      <p class="font-sans text-on-surface-variant mb-8 leading-relaxed">
        To ensure low latency, {{ APP_NAME }} requires a local Whisper model. The app manages this download internally.
      </p>

      <!-- Models Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        <!-- Base Model -->
        <div class="bg-surface-container-lowest border border-surface-container-high rounded-xl p-6">
          <div class="flex items-center space-x-3 mb-4">
            <Icon icon="mdi:memory" class="w-5 h-5 text-on-background" />
            <h3 class="font-heading text-xl font-bold text-on-background">Base Model</h3>
          </div>
          <p class="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed">
            Recommended for most hardware. Balanced speed and accuracy.
          </p>
          <span class="inline-block px-3 py-1 bg-surface-container rounded-md font-mono text-xs text-on-surface font-medium">
            142 MB
          </span>
        </div>

        <!-- Large Model -->
        <div class="bg-surface-container-lowest border border-surface-container-high rounded-xl p-6">
          <div class="flex items-center space-x-3 mb-4">
            <Icon icon="mdi:star-outline" class="w-5 h-5 text-on-background" />
            <h3 class="font-heading text-xl font-bold text-on-background">Large Model</h3>
          </div>
          <p class="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed">
            Highest accuracy, requires dedicated GPU or significant RAM.
          </p>
          <span class="inline-block px-3 py-1 bg-surface-container rounded-md font-mono text-xs text-on-surface font-medium">
            2.9 GB
          </span>
        </div>

      </div>

      <!-- Note -->
      <div class="bg-surface-container p-4 border-l-4 border-primary rounded-r-lg">
        <p class="font-sans text-sm text-on-surface-variant">
          <span class="font-bold text-on-background">Note:</span> Open Settings > Models to select and download your preferred configuration. Models are stored in <code class="font-mono text-primary text-xs bg-[#0e0e0e] px-1 rounded">~/.local/share/whispershell/models</code>.
        </p>
      </div>

    </div>

  </div>
</template>
