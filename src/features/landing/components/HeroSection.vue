<script setup>
import BaseButton from '@/core/components/BaseButton.vue'
import BaseTerminal from '@/core/components/BaseTerminal.vue'
</script>

<template>
  <section class="w-full pt-24 pb-16 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
    
    <!-- Badge -->
    <div class="mb-8">
      <span class="inline-flex items-center px-3 py-1 rounded-full border border-surface-container-highest bg-surface-container-lowest text-on-surface-variant font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase">
        RPM Based &bull; Wayland Optimized
      </span>
    </div>

    <!-- Headlines -->
    <h1 class="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-on-background tracking-tight max-w-4xl mb-6 leading-tight">
      DICTATE DIRECTLY <br /> TO YOUR LINUX
    </h1>
    <div class="max-w-2xl mx-auto mb-10">
      <p class="font-sans text-lg sm:text-xl text-on-surface-variant mb-2">
        A secure, offline voice-to-text tool built for Wayland and modern RPM-based Linux distributions.
      </p>
    </div>

    <!-- Buttons -->
    <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
      <BaseButton to="/downloads" variant="primary" class="w-full sm:w-auto min-w-[160px]">
        Get the RPM
      </BaseButton>
      <BaseButton to="/docs/getting-started" variant="ghost" class="w-full sm:w-auto min-w-[160px]">
        Read Docs
      </BaseButton>
    </div>

    <!-- Terminal Mockup -->
    <BaseTerminal title="Terminal" class="w-full max-w-3xl mx-auto text-left">
      <div class="font-mono text-xs sm:text-sm text-on-surface-variant leading-relaxed">
        <div><span class="text-primary">user@linux:~$</span> whispershell --toggle-recording</div>
        <div class="opacity-75">[WhisperShell] 🔧 Wayland detected — forcing GDK_BACKEND=x11 (XWayland) for global hotkey support</div>
        <div class="opacity-75">[WhisperShell] An instance is already running. Triggered the existing instance.</div>
        <div class="mt-4 text-on-background font-bold">&gt; Dictating directly to active window...<span class="animate-pulse">█</span></div>
      </div>
    </BaseTerminal>

  </section>
</template>
