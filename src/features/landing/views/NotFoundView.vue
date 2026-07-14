<script setup>
import BaseButton from '@/core/components/BaseButton.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
    <h1 class="font-heading text-9xl font-extrabold text-primary mb-4 tracking-tighter">
      404
    </h1>
    <h2 class="font-heading text-3xl font-bold text-on-background mb-6">
      Page Not Found
    </h2>
    <p class="font-sans text-lg text-on-surface-variant mb-8 max-w-md">
      The page you are looking for doesn't exist or has been moved.
    </p>
    <BaseButton to="/">
      Back to Home
    </BaseButton>
  </div>
</template>
