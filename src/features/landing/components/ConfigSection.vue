<script setup>
import { Icon } from '@iconify/vue'
import { APP_NAME } from '@/core/constants'
</script>

<template>
  <section class="w-full py-24 bg-surface-container-lowest border-t border-surface-container">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <!-- Text & Links -->
        <div>
          <h2 class="font-heading text-3xl sm:text-4xl font-bold text-on-background mb-4">
            Simple to Configure
          </h2>
          <p class="font-sans text-on-surface-variant mb-8 text-lg">
            Dive into our comprehensive documentation to tailor {{ APP_NAME }} to your exact workflow.
          </p>

          <div class="space-y-4">
            <!-- Guide Card 1 -->
            <router-link to="/docs/model-config" class="group flex items-center justify-between bg-surface-container border border-surface-container-high rounded-xl p-6 hover:bg-surface-container-highest transition-colors">
              <div>
                <span class="block font-mono text-[10px] text-primary uppercase tracking-wider mb-1">Guide</span>
                <span class="block font-sans font-bold text-on-background">Model Configuration</span>
              </div>
              <Icon icon="mdi:arrow-right" class="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
            </router-link>

            <!-- Guide Card 2 -->
            <router-link to="/docs/hotkeys" class="group flex items-center justify-between bg-surface-container border border-surface-container-high rounded-xl p-6 hover:bg-surface-container-highest transition-colors">
              <div>
                <span class="block font-mono text-[10px] text-primary uppercase tracking-wider mb-1">Guide</span>
                <span class="block font-sans font-bold text-on-background">Setting up Hotkeys</span>
              </div>
              <Icon icon="mdi:arrow-right" class="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
            </router-link>
          </div>
        </div>

        <!-- Code Window -->
        <div class="w-full bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden shadow-2xl">
          <div class="flex items-center px-4 py-3 bg-surface-container border-b border-surface-container-highest">
            <Icon icon="mdi:cog-outline" class="w-4 h-4 text-on-surface-variant mr-2" />
            <span class="font-mono text-xs text-on-surface-variant uppercase tracking-wider">config.yaml</span>
          </div>
          <div class="p-6 overflow-x-auto">
            <pre class="font-mono text-xs sm:text-sm text-on-surface-variant leading-relaxed">
<span class="text-primary">model:</span>
  type: <span class="text-tertiary">"base.en"</span>
  path: <span class="text-tertiary">"~/.cache/whispershell/models/"</span>

<span class="text-primary">hotkeys:</span>
  toggle_listen: <span class="text-tertiary">"Super+Shift+O"</span>

<span class="text-primary">wayland:</span>
  input_method: <span class="text-tertiary">"virtual_keyboard_v1"</span></pre>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
