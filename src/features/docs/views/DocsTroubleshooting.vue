<script setup>
import { APP_NAME } from '@/core/constants'
import BaseCodeBlock from '@/core/components/BaseCodeBlock.vue'
import BaseAccordionItem from '@/core/components/BaseAccordionItem.vue'
import BaseCallout from '@/core/components/BaseCallout.vue'
import { Icon } from '@iconify/vue'

const faqs = [
  {
    question: 'Why does the overlay not appear on X11?',
    answer: `Because ${APP_NAME} leverages cutting-edge Wayland-specific features (like the virtual_keyboard_v1 protocol) for maximum security and zero-latency injection, it structurally cannot run on legacy X11 servers.`
  },
  {
    question: 'Transcription is very slow or lagging. What can I do?',
    answer: 'Ensure that you are using the Base Model. The Large Model is highly accurate but requires a dedicated GPU or at least 16GB of system RAM to perform near real-time inference. You can also verify your GPU is being utilized by running <code>nvidia-smi</code>.'
  },
  {
    question: 'How do I change the default language?',
    answer: `By default, ${APP_NAME} auto-detects the spoken language. However, for maximum speed, you can force English-only mode in the Settings > Models menu.`
  },
  {
    question: 'How do I customize where logs and recordings are saved?',
    answer: `You can customize all file directories by opening the settings GUI window (running <code>whispershell --toggle-config</code> or searching for the application in your launcher). Inside the <strong>File Paths</strong> section, you can change the target directories for Voice Recordings, Last Messages Log, and Error Logs to any folder of your choice.`
  }
]
</script>

<template>
  <div class="max-w-4xl">
    
    <h1 class="font-heading text-5xl sm:text-6xl font-extrabold text-primary mb-8 tracking-tight uppercase">
      TROUBLESHOOTING &amp; FAQS
    </h1>
    
    <p class="font-sans text-lg text-on-surface-variant mb-12 leading-relaxed">
      Need help or running into configuration issues? Check out our recovery steps and interactive answers below.
    </p>

    <!-- Troubleshooting Guide -->
    <div class="mb-12 border-b border-surface-container-high pb-12">
      <div class="mb-6">
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-on-background">App Freezes &amp; Crashes</h2>
      </div>

      <p class="font-sans text-on-surface-variant leading-relaxed mb-6">
        Occasionally, backend issues (like GPU driver dropouts, hardware memory bottlenecks, or configuration parsing bugs) may cause the Whisper model engine or the overlay panel to crash or hang.
      </p>

      <div class="space-y-6 max-w-2xl">
        <div>
          <span class="block text-primary font-bold text-xs uppercase tracking-wider mb-2">Restart the Application:</span>
          <p class="font-sans text-sm text-on-surface-variant leading-relaxed mb-3">
            If the hotkeys stop responding or the voice recorder overlay locks up, terminate any hanging instances and launch it fresh using this command sequence:
          </p>
          <BaseCodeBlock code="pkill whispershell && whispershell" />
        </div>
      </div>
    </div>

    <!-- Logs and Paths -->
    <div class="mb-12 border-b border-surface-container-high pb-12">
      <div class="mb-6">
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-on-background">Default File Paths &amp; Logs</h2>
      </div>

      <p class="font-sans text-on-surface-variant leading-relaxed mb-6">
        {{ APP_NAME }} maintains active logs and output records in your system storage. You can inspect these directly or modify their target directories inside the settings GUI dashboard.
      </p>

      <!-- Info Callout -->
      <BaseCallout variant="primary" class="max-w-3xl mb-6">
        <span class="font-bold text-on-background">Using Custom Paths?</span> If you have configured custom directories, the default paths listed below will not apply. You can check, verify, or change your current active folders at any time through the configuration settings GUI (run <code class="text-primary">whispershell --toggle-config</code>) under the **File Paths** section.
      </BaseCallout>

      <div class="space-y-4 font-sans text-sm text-on-surface-variant leading-relaxed max-w-3xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-surface-container rounded-lg border border-surface-container-high">
          <div>
            <span class="block text-primary font-bold text-xs uppercase tracking-wider mb-1">Error Logs Directory:</span>
            <code class="font-mono text-xs text-on-surface">~/.local/state/whispershell/errors</code>
          </div>
          <BaseCodeBlock code="~/.local/state/whispershell/errors" inline class="flex-shrink-0" />
        </div>

        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-surface-container rounded-lg border border-surface-container-high">
          <div>
            <span class="block text-primary font-bold text-xs uppercase tracking-wider mb-1">Last Messages Log:</span>
            <code class="font-mono text-xs text-on-surface">~/.local/share/whispershell/messages.log</code>
          </div>
          <BaseCodeBlock code="~/.local/share/whispershell/messages.log" inline class="flex-shrink-0" />
        </div>

        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-surface-container rounded-lg border border-surface-container-high">
          <div>
            <span class="block text-primary font-bold text-xs uppercase tracking-wider mb-1">Voice Recordings Output:</span>
            <code class="font-mono text-xs text-on-surface">~/.local/share/whispershell/recordings</code>
          </div>
          <BaseCodeBlock code="~/.local/share/whispershell/recordings" inline class="flex-shrink-0" />
        </div>
      </div>
    </div>

    <!-- FAQ Accordion -->
    <div class="mb-12">
      <div class="mb-6">
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-on-background">Frequently Asked Questions</h2>
      </div>

      <div class="space-y-4">
        <BaseAccordionItem 
          v-for="(item, index) in faqs" 
          :key="index"
          :title="item.question"
        >
          <span v-html="item.answer"></span>
        </BaseAccordionItem>
      </div>
    </div>

  </div>
</template>
