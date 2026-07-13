<script setup>
import { Icon } from '@iconify/vue'
import { APP_NAME } from '@/core/constants'
</script>

<template>
  <div class="max-w-3xl">
    
    <h1 class="font-heading text-4xl sm:text-5xl font-bold text-primary mb-6 tracking-tight uppercase">
      DOWNLOAD {{ APP_NAME }}
    </h1>
    
    <p class="font-sans text-lg text-on-surface-variant mb-12 leading-relaxed">
      Get the latest version of {{ APP_NAME }} for Fedora. Follow the instructions below to add our repository and install the package securely on your system.
    </p>

    <div class="mb-10">
      <div class="flex items-center space-x-3 mb-6">
        <Icon icon="mdi:download-outline" class="w-6 h-6 text-primary" />
        <h2 class="font-heading text-2xl font-bold text-on-background">How to Download</h2>
      </div>
      
      <p class="font-sans text-on-surface-variant mb-8 leading-relaxed">
        {{ APP_NAME }} is distributed as an RPM package for Fedora. Follow these steps to install and verify the package securely.
      </p>

      <div class="space-y-8">
        
        <!-- Step 1 -->
        <div>
          <h3 class="font-sans font-bold text-on-background mb-4">1. Add Repository</h3>
          <div class="bg-surface-container-lowest border border-surface-container-high rounded-xl p-4 overflow-x-auto">
            <code class="font-mono text-sm text-on-surface-variant">
              sudo dnf copr enable whispershell/enable
            </code>
          </div>
        </div>

        <!-- Step 2 -->
        <div>
          <h3 class="font-sans font-bold text-on-background mb-4">2. Install Package</h3>
          <div class="bg-surface-container-lowest border border-surface-container-high rounded-xl p-4 overflow-x-auto">
            <code class="font-mono text-sm text-on-surface-variant">
              sudo dnf install whispershell
            </code>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
