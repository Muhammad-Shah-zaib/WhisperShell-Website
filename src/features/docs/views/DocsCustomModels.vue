<script setup>
import { APP_NAME } from '@/core/constants'
import BaseBadge from '@/core/components/BaseBadge.vue'
import BaseTerminal from '@/core/components/BaseTerminal.vue'
</script>

<template>
  <div class="flex-grow flex flex-col items-center justify-center max-w-2xl mx-auto w-full px-4 py-8">
    
    <!-- Terminal Window -->
    <BaseTerminal title="custom-model-config" class="w-full mb-8">
      <template #header-right>
        <BaseBadge variant="tertiary" mono class="mr-2">In-Development</BaseBadge>
      </template>

      <div class="overflow-x-auto">
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
    </BaseTerminal>

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
