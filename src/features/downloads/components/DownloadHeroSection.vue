<script setup>
import { Icon } from '@iconify/vue'
import BaseButton from '@/core/components/BaseButton.vue'
import BaseCodeBlock from '@/core/components/BaseCodeBlock.vue'
import BaseTerminal from '@/core/components/BaseTerminal.vue'
import { APP_NAME } from '@/core/constants'

defineProps({
  activeTab: {
    type: String,
    required: true
  }
})
defineEmits(['update:activeTab'])
</script>

<template>
  <section class="w-full pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-surface-container">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      <!-- Left Content -->
      <div>
        <!-- Badge -->
        <div class="mb-6">
          <span class="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-surface-container-high bg-surface-container font-mono text-xs text-on-surface-variant uppercase tracking-widest">
            <Icon icon="mdi:check-circle-outline" class="w-4 h-4" />
            <span>v0.1.0-BETA | RPM-BASED &amp; WAYLAND</span>
          </span>
        </div>

        <!-- Headline -->
        <h1 class="font-heading text-4xl sm:text-5xl font-extrabold text-on-background tracking-tight mb-6 leading-tight">
          Download <span class="text-primary">{{ APP_NAME.toUpperCase() }}</span> for Linux
        </h1>
        
        <!-- Description -->
        <p class="font-sans text-lg text-on-surface-variant mb-8 leading-relaxed">
          High-performance, secure, Wayland-native voice processing. Experience real-time dictation built specifically for the modern Linux workstation.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <BaseButton v-if="activeTab === 'Manual Install'" href="https://github.com/Muhammad-Shah-zaib/WhisperShell/releases/download/v0.1.0/WhisperShell-0.1.0-1.x86_64.rpm" variant="primary" class="w-full sm:w-auto">
            <span class="flex items-center space-x-2">
              <Icon icon="mdi:download-outline" class="w-5 h-5" />
              <span>Download RPM Package</span>
            </span>
          </BaseButton>
          <BaseButton v-else to="/docs/copr-support" variant="primary" class="w-full sm:w-auto">
            <span class="flex items-center space-x-2">
              <Icon icon="mdi:book-open-page-variant" class="w-5 h-5" />
              <span>Read Copr Documentation</span>
            </span>
          </BaseButton>
        </div>

        <!-- SHA256 Checksum -->
        <div v-if="activeTab === 'Manual Install'" class="flex flex-wrap items-center gap-2 mt-6 text-xs text-on-surface-variant font-sans mb-8">
          <span class="font-bold text-on-background">SHA256 Checksum:</span>
          <BaseCodeBlock code="1c965f494a53c10fc67d3a913fc3121258a712719e6c4a22cd46a251280f3a29" inline></BaseCodeBlock>
        </div>
        <div v-else class="mt-6 text-xs text-on-surface-variant font-sans mb-8">
          <span class="italic">Package signing and verification is handled automatically by Copr.</span>
        </div>

        <!-- Subtext -->
        <p class="font-sans text-xs text-outline-variant italic">
          Built for modern Wayland-native desktops.
        </p>
      </div>

      <!-- Right Content - Terminal -->
      <div class="w-full mt-8 lg:mt-0">
        <BaseTerminal 
          :tabs="[
            { name: 'Copr Repository', badge: 'Recommended' },
            { name: 'Manual Install' }
          ]" 
          :activeTab="activeTab"
          @update:activeTab="$emit('update:activeTab', $event)"
        >
          <div v-if="activeTab === 'Manual Install'">
            <div class="mb-4 space-y-2">
              <BaseCodeBlock code="cd ~/Downloads # Or path to rpm" />
              <BaseCodeBlock code="sudo dnf install ./WhisperShell-0.1.0-1.x86_64.rpm" />
            </div>
            <p class="font-sans text-xs text-on-surface-variant leading-relaxed">
              Requires an RPM-based Linux distribution using Wayland.
            </p>
          </div>
          <div v-else>
            <div class="mb-4 space-y-2">
              <BaseCodeBlock code="sudo dnf copr enable muhammad-shah-zaib/whispershell" />
              <BaseCodeBlock code="sudo dnf install whispershell" />
            </div>
            <p class="font-sans text-xs text-on-surface-variant leading-relaxed">
              Automatically receives updates via your system package manager.
            </p>
          </div>
        </BaseTerminal>
      </div>

    </div>
  </section>
</template>
