<script setup>
import { Icon } from '@iconify/vue'
import { APP_NAME } from '@/core/constants'
import BaseCodeBlock from '@/core/components/BaseCodeBlock.vue'
import BaseBadge from '@/core/components/BaseBadge.vue'
import BaseCallout from '@/core/components/BaseCallout.vue'
</script>

<template>
  <div class="max-w-4xl">
    
    <h1 class="font-heading text-5xl sm:text-6xl font-extrabold text-primary mb-8 tracking-tight uppercase">
      MODEL CONFIGURATION
    </h1>
    
    <p class="font-sans text-lg text-on-surface-variant mb-12 leading-relaxed">
      {{ APP_NAME }} requires a local Whisper model for high-performance transcription. Choose the configuration that best fits your hardware capabilities.
    </p>

    <div class="mb-10">
      <div class="flex items-center space-x-3 mb-6">
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-on-background">Model Configuration</h2>
      </div>
      
      <p class="font-sans text-on-surface-variant mb-8 leading-relaxed">
        To ensure low latency, {{ APP_NAME }} requires a local Whisper model. The app manages this download internally.
      </p>

      <!-- Models Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        <!-- Base Model -->
        <div class="bg-surface-container-lowest border border-surface-container-high rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-3">
                <Icon icon="mdi:memory" class="w-5 h-5 text-on-background" />
                <h3 class="font-heading text-xl sm:text-2xl font-bold text-on-background">Base Model</h3>
              </div>
              <BaseBadge variant="primary">Available</BaseBadge>
            </div>
            <p class="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed">
              Recommended for most hardware. Balanced speed and accuracy. Works great on CPU execution.
            </p>
          </div>
          <span class="w-fit px-3 py-1 bg-surface-container rounded-md font-mono text-xs text-on-surface font-medium">
            142 MB
          </span>
        </div>

        <!-- Turbo Model -->
        <div class="bg-surface-container-lowest border border-surface-container-high rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-heading text-xl sm:text-2xl font-bold text-on-background">Turbo Model</h3>
              <BaseBadge variant="primary">Available</BaseBadge>
            </div>
            <p class="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed">
              Whisper Large-v3-Turbo. High accuracy. Runs best on GPU acceleration, can fall back to CPU with higher latency.
            </p>
          </div>
          <span class="w-fit px-3 py-1 bg-surface-container rounded-md font-mono text-xs text-on-surface font-medium">
            1.6 GB
          </span>
        </div>

        <!-- Large Model -->
        <div class="bg-surface-container-lowest border border-surface-container-high rounded-xl p-6 opacity-60 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-heading text-xl sm:text-2xl font-bold text-on-background">Large Model</h3>
              <BaseBadge variant="neutral">Coming Soon</BaseBadge>
            </div>
            <p class="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed">
              Standard Whisper Whisper Large-v3. Highest accuracy local model. Requires dedicated graphics card or significant memory.
            </p>
          </div>
          <span class="w-fit px-3 py-1 bg-surface-container rounded-md font-mono text-xs text-on-surface font-medium">
            2.9 GB
          </span>
        </div>

        <!-- Parakeet v3 Model -->
        <div class="bg-surface-container-lowest border border-surface-container-high rounded-xl p-6 opacity-60 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-heading text-xl sm:text-2xl font-bold text-on-background">Parakeet v3</h3>
              <BaseBadge variant="neutral">Coming Soon</BaseBadge>
            </div>
            <p class="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed">
              Advanced, highly-optimized transcription model featuring fast inference speeds and low resource utilization.
            </p>
          </div>
          <span class="w-fit px-3 py-1 bg-surface-container rounded-md font-mono text-xs text-on-surface font-medium">
            TBD
          </span>
        </div>

      </div>

      <!-- Selecting Your Model -->
      <div class="mb-8 border-t border-surface-container-high pt-8">
        <h3 class="font-heading text-xl sm:text-2xl font-bold text-on-background mb-4">Selecting Your Model</h3>
        <p class="font-sans text-sm text-on-surface-variant leading-relaxed mb-6">
          Open the configuration panel by running <code class="text-primary font-semibold">whispershell --toggle-config</code> or launching the app from your launcher. In the **Model Selection** section at the top, open the dropdown menu to choose between the two currently available models (Base or Turbo). Click **Save** in the footer to initialize and complete the automatic local model download.
        </p>
        <div class="rounded-xl overflow-hidden border border-surface-container-high shadow-xl max-w-[340px] bg-[#0e0e0e]">
          <img src="/assets/model-selection-config-window.png" alt="WhisperShell Model Selection configuration panel settings UI screenshot" class="w-full h-auto object-contain" />
        </div>
      </div>

      <!-- Note -->
      <BaseCallout variant="primary">
        <p class="font-sans text-sm text-on-surface-variant mb-4">
          <span class="font-bold text-on-background">Note:</span> Under the Model Selection section you can select and download your preferred model.
        </p>
        <div class="p-4 bg-surface-container rounded-lg border border-surface-container-high flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span class="block text-primary font-bold text-xs uppercase tracking-wider mb-1">Model Storage Directory:</span>
            <code class="font-mono text-sm text-on-surface-variant">~/.local/share/whispershell/models</code>
          </div>
          <BaseCodeBlock code="~/.local/share/whispershell/models" inline class="flex-shrink-0" />
        </div>
      </BaseCallout>

    </div>

  </div>
</template>
