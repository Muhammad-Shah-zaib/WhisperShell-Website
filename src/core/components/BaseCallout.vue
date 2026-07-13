<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'error', 'warning', 'neutral'].includes(value)
  }
})

const borderClasses = {
  primary: 'border-l-primary',
  error: 'border-l-error',
  warning: 'border-l-warning',
  neutral: 'border-l-surface-container-high'
}

const titleClasses = {
  primary: 'text-primary',
  error: 'text-error',
  warning: 'text-warning',
  neutral: 'text-on-background'
}

const borderClass = computed(() => borderClasses[props.variant] || borderClasses.primary)
const titleClass = computed(() => titleClasses[props.variant] || titleClasses.primary)
</script>

<template>
  <div 
    class="bg-surface-container p-5 border-l-4 rounded-r-xl font-sans text-sm text-on-surface-variant leading-relaxed"
    :class="borderClass"
  >
    <div v-if="title" class="font-bold mb-2 text-base sm:text-lg" :class="titleClass">
      {{ title }}
    </div>
    <slot />
  </div>
</template>
