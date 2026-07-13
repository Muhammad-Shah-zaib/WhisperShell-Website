<script setup>
import BaseButton from '@/core/components/BaseButton.vue'
</script>

<template>
  <section class="w-full pt-24 pb-16 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
    
    <!-- Badge -->
    <div class="mb-8">
      <span class="inline-flex items-center px-3 py-1 rounded-full border border-surface-container-highest bg-surface-container-lowest text-on-surface-variant font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase">
        Fedora 44 Ready &bull; Wayland Optimized
      </span>
    </div>

    <!-- Headlines -->
    <h1 class="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-on-background tracking-tight max-w-4xl mb-6 leading-tight">
      DICTATE DIRECTLY <br /> TO YOUR LINUX
    </h1>
    <div class="max-w-2xl mx-auto mb-10">
      <p class="font-sans text-lg sm:text-xl text-on-surface-variant mb-2">
        A secure, offline voice-to-text tool built for Wayland and Fedora 44.
      </p>
      <p class="font-sans text-xs text-outline-variant">
        Note: Built specifically for Wayland. Legacy X11 environments are not supported.
      </p>
    </div>

    <!-- Buttons -->
    <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
      <BaseButton to="/downloads" variant="primary" class="w-full sm:w-auto min-w-[160px]">
        Get the RPM
      </BaseButton>
      <BaseButton href="#" variant="ghost" class="w-full sm:w-auto min-w-[160px]">
        Read Docs
      </BaseButton>
    </div>

    <!-- Terminal Mockup -->
    <div class="w-full max-w-3xl mx-auto bg-surface-container-lowest rounded-xl overflow-hidden border border-surface-container-high shadow-2xl text-left">
      <!-- Terminal Header -->
      <div class="flex items-center px-4 py-3 bg-surface-container border-b border-surface-container-highest">
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-error"></div>
          <div class="w-3 h-3 rounded-full bg-tertiary"></div>
          <div class="w-3 h-3 rounded-full bg-primary-container"></div>
        </div>
      </div>
      <!-- Terminal Body -->
      <div class="p-6 font-mono text-xs sm:text-sm text-on-surface-variant leading-relaxed">
        <div><span class="text-primary">user@fedora:~$</span> whispershell --listen</div>
        <div>Initializing model [base.en]... <span class="text-on-background">Done.</span></div>
        <div>Wayland compositor detected. Sandboxing active.</div>
        <div>X11 check: Not detected. <span class="text-error">Wayland optimization enabled.</span></div>
        <div class="mt-4 text-on-background font-bold">&gt; Dictating directly to active window...<span class="animate-pulse">_</span></div>
      </div>
    </div>

  </section>
</template>
