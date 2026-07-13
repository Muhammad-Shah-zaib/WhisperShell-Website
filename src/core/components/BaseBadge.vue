<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'neutral',
    validator: (value) => ['primary', 'error', 'warning', 'tertiary', 'neutral'].includes(value)
  },
  mono: {
    type: Boolean,
    default: false
  }
})

const variantClasses = {
  primary: 'bg-primary/20 text-primary border border-primary/10',
  error: 'bg-error/20 text-error border border-error/10',
  warning: 'bg-warning/20 text-warning border border-warning/10',
  tertiary: 'bg-tertiary/10 text-tertiary border border-tertiary/20',
  neutral: 'bg-surface-container-high text-on-surface-variant'
}

const badgeClasses = computed(() => {
  return [
    'inline-block px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-bold select-none',
    props.mono ? 'font-mono' : 'font-sans',
    variantClasses[props.variant]
  ].join(' ')
})
</script>

<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>
