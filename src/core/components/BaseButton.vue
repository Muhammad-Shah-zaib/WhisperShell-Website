<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'ghost', 'secondary'].includes(value)
  },
  href: {
    type: String,
    default: null
  },
  to: {
    type: [String, Object],
    default: null
  }
})

const ripples = ref([])

function createRipple(event) {
  const button = event.currentTarget
  const rect = button.getBoundingClientRect()
  const diameter = Math.max(button.clientWidth, button.clientHeight)
  const radius = diameter / 2
  
  const ripple = {
    id: Date.now(),
    x: event.clientX - rect.left - radius,
    y: event.clientY - rect.top - radius,
    size: diameter
  }
  
  ripples.value.push(ripple)
  
  setTimeout(() => {
    ripples.value = ripples.value.filter(r => r.id !== ripple.id)
  }, 600)
}

const componentTag = computed(() => {
  if (props.href) return 'a'
  if (props.to) return 'router-link'
  return 'button'
})

const classes = computed(() => {
  const base = 'relative overflow-hidden inline-flex items-center justify-center px-6 py-3 font-heading text-sm font-semibold rounded transition-colors duration-200 cursor-pointer'
  switch (props.variant) {
    case 'primary':
      return `${base} bg-primary text-on-primary hover:bg-primary-container`
    case 'ghost':
      return `${base} bg-transparent text-primary border border-outline hover:bg-surface-container`
    case 'secondary':
      return `${base} bg-surface-container text-on-surface hover:bg-surface-container-high`
    default:
      return base
  }
})

const rippleColor = computed(() => {
  return props.variant === 'primary' ? 'bg-white opacity-40' : 'bg-primary opacity-30'
})
</script>

<template>
  <component 
    :is="componentTag" 
    :href="href" 
    :to="to" 
    :class="classes"
    @mousedown="createRipple"
  >
    <span class="relative z-10 flex items-center justify-center">
      <slot />
    </span>
    <span 
      v-for="r in ripples" 
      :key="r.id"
      :class="['absolute rounded-full pointer-events-none animate-ripple', rippleColor]"
      :style="{ width: r.size + 'px', height: r.size + 'px', left: r.x + 'px', top: r.y + 'px' }"
    ></span>
  </component>
</template>

<style scoped>
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
.animate-ripple {
  animation: ripple 0.6s linear;
  transform: scale(0);
}
</style>
