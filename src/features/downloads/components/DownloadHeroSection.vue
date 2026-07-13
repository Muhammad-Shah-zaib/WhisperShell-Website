<script setup>
import { Icon } from '@iconify/vue'
import BaseButton from '@/core/components/BaseButton.vue'
import { APP_NAME } from '@/core/constants'
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
            <span>v1.2.0-STABLE | RPM-BASED &amp; WAYLAND</span>
          </span>
        </div>

        <!-- Headline -->
        <h1 class="font-heading text-4xl sm:text-5xl font-extrabold text-on-background tracking-tight mb-6 leading-tight">
          Download <span class="text-primary">{{ APP_NAME.toUpperCase() }}</span> for Linux
        </h1>
        
        <!-- Description -->
        <p class="font-sans text-lg text-on-surface-variant mb-10 leading-relaxed">
          High-performance, secure, Wayland-native voice processing. Experience real-time dictation built specifically for the modern Linux workstation.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <BaseButton href="#" variant="primary" class="w-full sm:w-auto">
            <span class="flex items-center space-x-2">
              <Icon icon="mdi:download-outline" class="w-5 h-5" />
              <span>Download RPM Package</span>
            </span>
          </BaseButton>
          <BaseButton href="#" variant="ghost" class="w-full sm:w-auto">
            <span class="flex items-center space-x-2">
              <Icon icon="mdi:file-document-outline" class="w-5 h-5" />
              <span>Release Notes</span>
            </span>
          </BaseButton>
        </div>

        <!-- Subtext -->
        <p class="font-sans text-xs text-outline-variant italic">
          Built for modern Wayland-native desktops. Older X11-based environments are not supported.
        </p>
      </div>

      <!-- Right Content - Terminal -->
      <div class="w-full mt-8 lg:mt-0">
        <div class="bg-surface-container-lowest border border-surface-container-high rounded-xl overflow-hidden shadow-2xl">
          <!-- Terminal Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-surface-container-high bg-surface-container">
            <span class="font-mono text-xs text-on-surface-variant uppercase tracking-wider">Installation via Terminal</span>
            <button class="text-on-surface-variant hover:text-primary transition-colors">
              <Icon icon="mdi:content-copy" class="w-4 h-4" />
            </button>
          </div>
          <!-- Terminal Body -->
          <div class="p-6">
            <div class="bg-[#0e0e0e] rounded p-4 mb-4">
              <code class="font-mono text-sm text-on-background">
                <span class="text-primary">$</span> sudo dnf install ./whispershell-1.2.0.rpm
              </code>
            </div>
            <p class="font-sans text-xs text-on-surface-variant leading-relaxed">
              Requires an RPM-based Linux distribution using Wayland.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
