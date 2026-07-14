<script setup>
import BaseBadge from '@/core/components/BaseBadge.vue'

defineProps({
  title: {
    type: String,
    default: 'Terminal'
  },
  tabs: {
    type: Array,
    default: () => []
  },
  activeTab: {
    type: String,
    default: ''
  }
})

defineEmits(['update:activeTab'])

const getTabName = (tab) => {
  return typeof tab === 'object' ? tab.name : tab
}
</script>

<template>
  <div class="base-terminal bg-surface-container-lowest border border-surface-container-high rounded-xl overflow-hidden shadow-2xl flex flex-col">
    <!-- Terminal Header -->
    <div class="flex items-center justify-between px-4 border-b border-surface-container-high bg-surface-container h-[45px]">
      <div class="flex-1 overflow-x-auto overflow-y-hidden no-scrollbar pr-4 h-full flex items-end">
        <template v-if="tabs && tabs.length > 0">
          <div class="flex space-x-1 w-full">
            <button
              v-for="tab in tabs"
              :key="getTabName(tab)"
              @click="$emit('update:activeTab', getTabName(tab))"
              class="font-mono text-[10px] sm:text-xs uppercase tracking-wider px-5 py-2.5 rounded-t-lg transition-colors border-b-2 -mb-[1px] flex items-center gap-2 cursor-pointer whitespace-nowrap"
              :class="activeTab === getTabName(tab) 
                ? 'text-primary border-primary bg-surface-container-lowest' 
                : 'text-on-surface-variant border-transparent hover:text-on-surface hover:bg-surface-container-high'"
            >
              <BaseBadge 
                v-if="typeof tab === 'object' && tab.badge" 
                variant="tertiary"
                class="scale-90 origin-left"
              >
                {{ tab.badge }}
              </BaseBadge>
              <span>{{ getTabName(tab) }}</span>
            </button>
          </div>
        </template>
        <template v-else>
          <div class="px-2 pb-3.5 flex items-center">
            <slot name="header-left" />
            <span class="font-mono text-xs text-on-surface-variant uppercase tracking-wider">{{ title }}</span>
          </div>
        </template>
      </div>

      <!-- Fake window controls on the right -->
      <div class="flex items-center space-x-2 pl-2">
        <slot name="header-right" />
        <div class="flex items-center space-x-1.5">
          <span class="w-3 h-3 rounded-full bg-primary opacity-80 hover:opacity-100 transition-opacity"></span>
          <span class="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-80 hover:opacity-100 transition-opacity"></span>
          <span class="w-3 h-3 rounded-full bg-[#ff5f56] opacity-80 hover:opacity-100 transition-opacity"></span>
        </div>
      </div>
    </div>
    
    <!-- Terminal Body -->
    <div class="p-6 overflow-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Custom scrollbars for elements inside the terminal container */
.base-terminal :deep(::-webkit-scrollbar) {
  width: 6px;
  height: 6px;
}
.base-terminal :deep(::-webkit-scrollbar-track) {
  background: transparent;
}
.base-terminal :deep(::-webkit-scrollbar-thumb) {
  background: var(--color-surface-container-highest);
  border-radius: 3px;
}
.base-terminal :deep(::-webkit-scrollbar-thumb:hover) {
  background: var(--color-primary);
}

/* Firefox compatibility */
.base-terminal {
  scrollbar-width: thin;
  scrollbar-color: var(--color-surface-container-highest) transparent;
}
</style>
