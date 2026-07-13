<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  inline: {
    type: Boolean,
    default: false
  }
})

const copied = ref(false)

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}
</script>

<template>
  <div 
    v-if="!inline"
    class="flex items-center justify-between bg-surface-container-lowest border border-surface-container-high rounded-xl px-4 py-3 font-mono text-sm text-on-surface-variant overflow-x-auto group"
  >
    <code class="text-on-surface-variant break-all select-all">{{ code }}</code>
    <button 
      @click="copyToClipboard" 
      class="ml-4 p-1.5 rounded-md hover:bg-surface-container text-on-surface-variant hover:text-on-background transition-colors cursor-pointer flex-shrink-0"
      :title="copied ? 'Copied!' : 'Copy Code'"
    >
      <Icon v-if="copied" icon="mdi:check" class="w-4 h-4 text-primary" />
      <Icon v-else icon="mdi:content-copy" class="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
    </button>
  </div>
  <code 
    v-else
    class="inline-flex items-center bg-surface-container px-2 py-0.5 rounded text-primary font-mono font-semibold text-sm group relative cursor-pointer"
    @click="copyToClipboard"
    :title="copied ? 'Copied!' : 'Click to copy'"
  >
    <span>{{ code }}</span>
    <Icon 
      v-if="copied" 
      icon="mdi:check" 
      class="w-3.5 h-3.5 ml-1.5 text-primary flex-shrink-0" 
    />
    <Icon 
      v-else 
      icon="mdi:content-copy" 
      class="w-3.5 h-3.5 ml-1.5 opacity-0 group-hover:opacity-60 transition-opacity flex-shrink-0" 
    />
  </code>
</template>
