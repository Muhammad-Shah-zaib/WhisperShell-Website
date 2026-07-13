<script setup>
import { APP_NAME } from '@/core/constants'

const faqs = [
  {
    question: 'Why does the overlay not appear on X11?',
    answer: `Because ${APP_NAME} leverages cutting-edge Wayland-specific features (like the virtual_keyboard_v1 protocol) for maximum security and zero-latency injection, it structurally cannot run on legacy X11 servers.`
  },
  {
    question: 'Transcription is very slow or lagging. What can I do?',
    answer: 'Ensure that you are using the Base Model. The Large Model is highly accurate but requires a dedicated GPU or at least 16GB of system RAM to perform near real-time inference. You can also verify your GPU is being utilized by running nvidia-smi.'
  },
  {
    question: 'How do I change the default language?',
    answer: `By default, ${APP_NAME} auto-detects the spoken language. However, for maximum speed, you can force English-only mode in the Settings > Models menu.`
  }
]
</script>

<template>
  <div class="max-w-4xl">
    
    <h1 class="font-heading text-4xl sm:text-5xl font-bold text-primary mb-6 tracking-tight uppercase">
      TROUBLESHOOTING &amp; FAQS
    </h1>
    
    <p class="font-sans text-lg text-on-surface-variant mb-12 leading-relaxed">
      Running into issues? Check out our frequently asked questions or visit our GitHub repository to open an issue.
    </p>

    <div class="space-y-8 mb-12">
      <!-- FAQ Items -->
      <div 
        v-for="(item, index) in faqs" 
        :key="index"
        class="bg-surface-container-lowest border border-surface-container-high rounded-xl p-6"
      >
        <h3 class="font-heading text-xl font-bold text-on-background mb-3">{{ item.question }}</h3>
        <p class="font-sans text-sm text-on-surface-variant leading-relaxed">{{ item.answer }}</p>
      </div>
    </div>

  </div>
</template>
