<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { APP_NAME } from '@/core/constants'
import BaseTabs from '@/core/components/BaseTabs.vue'
import BaseCodeBlock from '@/core/components/BaseCodeBlock.vue'
import BaseCallout from '@/core/components/BaseCallout.vue'

const activeTab = ref('Command Line (CLI)')
const tabs = ['Command Line (CLI)', 'Graphical Interface (GUI)']
</script>

<template>
  <div class="max-w-4xl">
    
    <h1 class="font-heading text-5xl sm:text-6xl font-extrabold text-primary mb-8">
      GETTING STARTED
    </h1>
    
    <p class="font-sans text-lg text-on-surface-variant mb-12 leading-relaxed">
      Welcome to {{ APP_NAME }}! This guide will help you understand the architecture, system requirements, and core concepts behind our secure offline voice-to-text tool.
    </p>

    <!-- Overview Section -->
    <div class="mb-12">
      <div class="flex items-center space-x-3 mb-6">
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-on-background">What is {{ APP_NAME }}?</h2>
      </div>
      <p class="font-sans text-on-surface-variant mb-6 leading-relaxed">
        {{ APP_NAME }} provides system-wide dictation directly into any active application. By leveraging local inference models, your voice data is processed entirely offline, ensuring maximum privacy and zero reliance on external cloud services.
      </p>
    </div>

    <!-- Installation -->
    <div class="mb-12">
      <div class="flex items-center space-x-3 mb-6">
        <Icon icon="mdi:download-outline" class="w-6 h-6 text-primary" />
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-on-background">Installation</h2>
      </div>
      <p class="font-sans text-on-surface-variant mb-6 leading-relaxed">
        Get the latest <code>.rpm</code> release package from our GitHub Releases page. Once downloaded, you can install it using either the Command Line Interface (CLI) or the Graphical User Interface (GUI).
      </p>

      <!-- Tabbed Container -->
      <div class="bg-surface-container-low border border-surface-container rounded-2xl p-6 sm:p-8">
        <div class="flex justify-between items-start mb-6">
          <BaseTabs v-model="activeTab" :tabs="tabs" class="!mb-0" />
        </div>

        <!-- CLI Install -->
        <div v-if="activeTab === 'Command Line (CLI)'" class="transition-opacity duration-200">
          <h3 class="font-sans text-xl sm:text-2xl font-bold text-on-background mb-3">
            Option 1: <span class="text-primary">Command Line Interface (CLI)</span>
          </h3>
          <ol class="list-decimal list-inside space-y-3 font-sans text-sm text-on-surface-variant leading-relaxed ml-2">
            <li>Open your terminal window.</li>
            <li>Navigate to the directory where the package was downloaded (e.g., <code>Downloads</code>):
              <BaseCodeBlock code="cd ~/Downloads" class="mt-2" />
            </li>
            <li>Verify that the package file is in the directory:
              <BaseCodeBlock code="ls whispershell*.rpm" class="mt-2" />
            </li>
            <li>Install the package using the local dnf installer:
              <BaseCodeBlock code="sudo dnf install ./whispershell-*.rpm" class="mt-2" />
            </li>
          </ol>
        </div>

        <!-- GUI Install -->
        <div v-else-if="activeTab === 'Graphical Interface (GUI)'" class="transition-opacity duration-200">
          <h3 class="font-sans text-xl sm:text-2xl font-bold text-on-background mb-3">
            Option 2: <span class="text-primary">Graphical Interface (GUI)</span>
          </h3>
          <p class="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed">
            Simply locate the downloaded <code>.rpm</code> package in your file manager and double-click it. This will launch your distribution's native Software Installer app (such as GNOME Software or Discover). Click <strong>Install</strong> and enter your system password to complete the setup.
          </p>
          <div class="mt-6 rounded-lg overflow-hidden border border-surface-container-high shadow-lg max-w-xl">
            <img src="/assets/setting-up-hotkey-GUI.png" alt="WhisperShell GUI Configuration settings example" class="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>

    <!-- First Steps & Hotkeys -->
    <div class="mb-12">
      <div class="flex items-center space-x-3 mb-6">
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-on-background">First Steps: Setting Up Hotkeys</h2>
      </div>
      <p class="font-sans text-on-surface-variant mb-4 leading-relaxed">
        After installing, the very first step is to configure your global keyboard shortcuts. Because of Wayland's modern security protocols, applications cannot track global hotkeys in the background. You must set these up inside your Linux desktop settings.
      </p>
      <p class="font-sans text-on-surface-variant mb-6 leading-relaxed">
        You can open the main application window anytime like a normal app by searching for <strong>WhisperShell</strong> in your applications launcher. However, to control the voice overlay or open config quickly, you will want custom shortcuts mapped to these two <span class="text-primary font-semibold">CLI commands</span>:
      </p>
      
      <div class="space-y-4 mb-6">
        <div class="p-4 bg-surface-container rounded-lg border border-surface-container-high flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span class="block text-primary font-bold text-xs uppercase tracking-wider mb-1">Toggle Voice Recording:</span>
            <code class="font-mono text-sm text-on-surface">whispershell --toggle-recording</code>
          </div>
          <BaseCodeBlock code="whispershell --toggle-recording" inline class="flex-shrink-0" />
        </div>
        <div class="p-4 bg-surface-container rounded-lg border border-surface-container-high flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span class="block text-primary font-bold text-xs uppercase tracking-wider mb-1">Toggle Configuration GUI:</span>
            <code class="font-mono text-sm text-on-surface">whispershell --toggle-config</code>
          </div>
          <BaseCodeBlock code="whispershell --toggle-config" inline class="flex-shrink-0" />
        </div>
      </div>

      <router-link to="/docs/hotkeys" class="inline-flex items-center text-primary font-bold hover:underline">
        <span>Guide to setting up the hotkeys</span>
        <Icon icon="mdi:arrow-right" class="w-4 h-4 ml-1" />
      </router-link>
    </div>

    <!-- System Requirements -->
    <div class="mb-12">
      <div class="flex items-center space-x-3 mb-6">
        <Icon icon="mdi:cpu-64-bit" class="w-6 h-6 text-primary" />
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-on-background">System Requirements</h2>
      </div>
      <ul class="list-disc list-inside space-y-3 font-sans text-on-surface-variant leading-relaxed ml-2 mb-6">
        <li><strong>OS:</strong> Any modern RPM-based Linux distribution running Wayland.</li>
        <li><strong>GPU:</strong> NVIDIA GPU with proprietary drivers installed (optional but highly recommended for fast inference).</li>
      </ul>
    </div>

    <!-- Warning Alert -->
    <BaseCallout variant="error" title="Legacy X11 Environments" class="mb-12">
      <p>
        We have not tested {{ APP_NAME }} on legacy X11 desktops, and it is highly likely that core features such as the global overlay or text injection will not function correctly. Wayland is strictly required for the intended secure experience.
      </p>
    </BaseCallout>

  </div>
</template>
