<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

defineProps({
  title: {
    type: String,
    required: true
  }
})

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="bg-surface-container-lowest border border-surface-container-high rounded-xl overflow-hidden transition-all duration-300">
    <!-- Accordion Trigger Button -->
    <button 
      @click="toggle"
      class="w-full flex items-center justify-between p-5 font-heading text-base sm:text-lg font-bold text-on-background hover:bg-surface-container/30 transition-colors text-left focus:outline-none"
    >
      <span>{{ title }}</span>
      <Icon 
        icon="mdi:chevron-down" 
        class="w-5 h-5 text-on-surface-variant transition-transform duration-300 flex-shrink-0 ml-4"
        :class="{ 'rotate-180 text-primary': isOpen }"
      />
    </button>
    
    <!-- Smooth Transition Content Wrapper using CSS Grid -->
    <div 
      class="grid transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
      :class="isOpen ? 'grid-rows-[1fr] opacity-100 blur-none' : 'grid-rows-[0fr] opacity-0 blur-[4px]'"
    >
      <div class="overflow-hidden">
        <div class="px-5 pb-5 border-t border-surface-container-high pt-4 bg-surface-container-lowest font-sans text-sm text-on-surface-variant leading-relaxed">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
