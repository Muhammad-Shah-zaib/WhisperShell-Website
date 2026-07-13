<script setup>
import { Icon } from '@iconify/vue'
import { APP_NAME } from '@/core/constants'
</script>

<template>
  <div class="max-w-4xl">
    
    <h1 class="font-heading text-4xl sm:text-5xl font-bold text-primary mb-6">
      GETTING STARTED
    </h1>
    
    <p class="font-sans text-lg text-on-surface-variant mb-12 leading-relaxed">
      Welcome to {{ APP_NAME }}! This guide will help you understand the architecture, system requirements, and core concepts behind our secure offline voice-to-text tool.
    </p>

    <!-- Overview Section -->
    <div class="mb-12">
      <div class="flex items-center space-x-3 mb-6">
        <Icon icon="mdi:information-outline" class="w-6 h-6 text-primary" />
        <h2 class="font-heading text-2xl font-bold text-on-background">What is {{ APP_NAME }}?</h2>
      </div>
      <p class="font-sans text-on-surface-variant mb-6 leading-relaxed">
        {{ APP_NAME }} provides system-wide dictation directly into any active application. By leveraging local inference models, your voice data is processed entirely offline, ensuring maximum privacy and zero reliance on external cloud services.
      </p>
    </div>

    <!-- Wayland vs X11 -->
    <div class="mb-12">
      <div class="flex items-center space-x-3 mb-6">
        <Icon icon="mdi:monitor-dashboard" class="w-6 h-6 text-primary" />
        <h2 class="font-heading text-2xl font-bold text-on-background">Wayland Optimization</h2>
      </div>
      <div class="bg-surface-container-lowest border border-surface-container-high rounded-xl p-6 mb-6">
        <p class="font-sans text-on-surface-variant mb-4 leading-relaxed">
          {{ APP_NAME }} is built specifically for modern Linux distributions that utilize the <strong>Wayland</strong> display server protocol. It has been extensively tested on Fedora Workstation 39 and 40+.
        </p>
        <p class="font-sans text-on-surface-variant leading-relaxed">
          To achieve seamless, secure text injection without requiring X11-based workarounds or compromised sandbox permissions, we rely on the <code class="bg-surface-container px-2 py-1 rounded text-primary font-mono text-sm">virtual_keyboard_v1</code> protocol.
        </p>
      </div>

      <!-- Warning Alert -->
      <div class="bg-error/10 border-l-4 border-error p-6 rounded-r-xl">
        <div class="flex items-start space-x-3">
          <Icon icon="mdi:alert-circle-outline" class="w-6 h-6 text-error flex-shrink-0 mt-0.5" />
          <div>
            <h3 class="font-sans font-bold text-error mb-2">Legacy X11 Environments</h3>
            <p class="font-sans text-sm text-on-surface-variant leading-relaxed">
              We have not tested {{ APP_NAME }} on legacy X11 desktops, and it is highly likely that core features such as the global overlay or text injection will not function correctly. Wayland is strictly required for the intended secure experience.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Hardware Requirements -->
    <div class="mb-12">
      <div class="flex items-center space-x-3 mb-6">
        <Icon icon="mdi:cpu-64-bit" class="w-6 h-6 text-primary" />
        <h2 class="font-heading text-2xl font-bold text-on-background">System Requirements</h2>
      </div>
      <ul class="list-disc list-inside space-y-3 font-sans text-on-surface-variant leading-relaxed ml-2">
        <li><strong>OS:</strong> Fedora Workstation 39 or newer (or equivalent Wayland-based distro).</li>
        <li><strong>GPU:</strong> NVIDIA GPU with proprietary drivers installed (optional but highly recommended for fast inference).</li>
        <li><strong>RAM:</strong> 8GB minimum (16GB recommended for Large models).</li>
        <li><strong>Storage:</strong> At least 3GB of free space for local model caching.</li>
      </ul>
    </div>

  </div>
</template>
