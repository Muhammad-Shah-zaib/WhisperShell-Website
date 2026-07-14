<script setup>
import { Icon } from '@iconify/vue'
import { APP_NAME } from '@/core/constants'
</script>

<template>
  <footer class="bg-background border-t border-surface-container py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <!-- Brand & Info -->
        <div class="md:col-span-2">
          <h2 class="font-heading text-2xl font-bold text-primary mb-4 tracking-tight">{{ APP_NAME }}</h2>
          <p class="text-sm font-sans text-on-surface-variant max-w-sm mb-6">
            Secure, offline voice-to-text for the modern Linux desktop.
          </p>
        </div>

        <!-- Product Links -->
        <div>
          <h3 class="font-mono text-xs font-bold text-on-surface uppercase tracking-wider mb-4">Navigation</h3>
          <ul class="space-y-3">
            <li><router-link to="/" class="text-sm font-sans text-on-surface-variant hover:text-primary transition-colors">Home</router-link></li>
            <li><router-link to="/downloads" class="text-sm font-sans text-on-surface-variant hover:text-primary transition-colors">Downloads</router-link></li>
            <li><router-link to="/docs" class="text-sm font-sans text-on-surface-variant hover:text-primary transition-colors">Docs</router-link></li>
          </ul>
        </div>

        <!-- Social Links -->
        <div>
          <h3 class="font-mono text-xs font-bold text-on-surface uppercase tracking-wider mb-4">Social / Dev</h3>
          <ul class="space-y-3">
            <li>
              <a href="https://github.com/Muhammad-Shah-zaib/WhisperShell" target="_blank" class="text-sm font-sans text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
                <Icon icon="mdi:github" class="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://muhammadshahzaib.tech/" target="_blank" class="text-sm font-sans text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
                <Icon icon="mdi:earth" class="w-4 h-4" />
                <span>Developer Portfolio</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/muhammad-shahzaib-311724292" target="_blank" class="text-sm font-sans text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
                <Icon icon="mdi:linkedin" class="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>
