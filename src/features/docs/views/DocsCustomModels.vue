<script setup>
import { APP_NAME } from '@/core/constants'
import BaseBadge from '@/core/components/BaseBadge.vue'
</script>

<template>
  <div class="flex-grow flex flex-col items-center justify-center max-w-2xl mx-auto w-full px-4 py-8">
    
    <!-- Terminal Window Container -->
    <div class="w-full bg-[#0e0e0e] border border-surface-container-high rounded-xl overflow-hidden shadow-2xl mb-8">
      
      <!-- Terminal Header / Titlebar -->
      <div class="flex items-center justify-between px-4 py-3 bg-surface-container border-b border-surface-container-high">
        <!-- Window Controls -->
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-error/40"></div>
          <div class="w-3 h-3 rounded-full bg-tertiary/40"></div>
          <div class="w-3 h-3 rounded-full bg-primary/40"></div>
        </div>
        <!-- Monospace Badge in Top Right -->
        <BaseBadge variant="tertiary" mono>In-Development</BaseBadge>
      </div>

      <!-- Terminal Body / Content -->
      <div class="p-6 overflow-x-auto">
        <pre class="font-mono text-xs sm:text-sm text-on-surface-variant leading-relaxed">
<span class="text-outline-variant">// Configure your custom local weights</span>
{
  <span class="text-primary">"custom_models_dir"</span>: <span class="text-tertiary">"~/.local/share/whispershell/custom/"</span>,
  <span class="text-primary">"allow_arbitrary_gguf"</span>: <span class="text-tertiary">true</span>,
  <span class="text-primary">"active_custom_model"</span>: <span class="text-tertiary">"whisper-large-v3-turbo-q5.gguf"</span>
}

<span class="text-primary">user@linux:~$</span> whispershell --load-custom ./model.gguf
<span class="text-on-surface-variant opacity-70">[INFO] Verifying model compatibility...</span>
<span class="text-on-surface-variant opacity-70">[INFO] Loading custom GGUF weights into GPU memory...</span>
<span class="text-primary animate-pulse">█</span></pre>
      </div>

    </div>

    <!-- Explanation Title & Paragraph below card -->
    <div class="text-center max-w-md">
      <h2 class="font-heading text-2xl font-bold text-on-background mb-3">
        Custom Model Support
      </h2>
      <p class="font-sans text-sm text-on-surface-variant leading-relaxed">
        We are building support for loading custom local Whisper/GGUF models. Soon, you will be able to run fine-tuned or quantized weights directly on your system.
      </p>
    </div>

  </div>
</template>
