<script setup>
import { Icon } from '@iconify/vue'
import { APP_NAME } from '@/core/constants'
import BaseCodeBlock from '@/core/components/BaseCodeBlock.vue'
</script>

<template>
  <div class="max-w-3xl">
    
    <h1 class="font-heading text-5xl sm:text-6xl font-extrabold text-primary mb-8 tracking-tight uppercase">
      COPR REPOSITORY
    </h1>
    
    <p class="font-sans text-lg text-on-surface-variant mb-12 leading-relaxed">
      For Fedora and other compatible RPM-based systems, you can install and update {{ APP_NAME }} directly through our Fedora Copr repository.
    </p>

    <div class="mb-10">
      <div class="flex items-center space-x-3 mb-6">
        <Icon icon="mdi:git" class="w-6 h-6 text-primary" />
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-on-background">Repository Setup</h2>
      </div>
      
      <p class="font-sans text-on-surface-variant mb-8 leading-relaxed">
        Adding the Copr repository allows your system package manager (<code>dnf</code>) to automatically receive updates whenever a new version of {{ APP_NAME }} is released.
      </p>

      <div class="space-y-8">
        
        <!-- Step 1 -->
        <div>
          <h3 class="font-sans text-xl sm:text-2xl font-bold text-on-background mb-4">1. Enable Copr Repository</h3>
          <BaseCodeBlock code="sudo dnf copr enable whispershell/enable" />
        </div>

        <!-- Step 2 -->
        <div>
          <h3 class="font-sans text-xl sm:text-2xl font-bold text-on-background mb-4">2. Install WhisperShell</h3>
          <BaseCodeBlock code="sudo dnf install whispershell" />
        </div>

      </div>
    </div>

  </div>
</template>
