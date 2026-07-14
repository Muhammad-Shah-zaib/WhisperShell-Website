<script setup>
import { ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import DocsSidebar from '../components/DocsSidebar.vue'

const route = useRoute()
const isDrawerOpen = ref(false)

// Close drawer on navigation
watch(() => route.path, () => {
  isDrawerOpen.value = false
})

// Swipe handling for drawer
const touchStartX = ref(0)
const touchEndX = ref(0)

const onTouchStart = (e) => {
  touchStartX.value = e.changedTouches[0].screenX
  touchEndX.value = e.changedTouches[0].screenX
}

const onTouchMove = (e) => {
  touchEndX.value = e.changedTouches[0].screenX
}

const onTouchEnd = () => {
  // Swipe left: starting touch is significantly to the right of ending touch
  if (touchStartX.value - touchEndX.value > 50) {
    isDrawerOpen.value = false
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto w-full flex flex-col md:flex-row flex-grow relative">
    
    <!-- Mobile FAB for Docs Menu -->
    <div class="md:hidden fixed bottom-24 right-6 z-40">
      <button 
        @click="isDrawerOpen = true" 
        class="bg-primary text-on-primary w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:bg-primary/90 transition-transform active:scale-95"
        aria-label="Open Docs Menu"
      >
        <Icon icon="mdi:menu" class="w-6 h-6" />
      </button>
    </div>

    <!-- Drawer Overlay -->
    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isDrawerOpen" 
        class="fixed inset-0 bg-black/60 z-[60] md:hidden backdrop-blur-sm"
        @click="isDrawerOpen = false"
      ></div>
    </transition>

    <!-- Sidebar Wrapper -->
    <div 
      class="fixed inset-y-0 left-0 z-[70] transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:z-0"
      :class="isDrawerOpen ? 'translate-x-0' : '-translate-x-full'"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <div class="h-full overflow-y-auto w-[280px] md:w-auto md:overflow-visible bg-background shadow-2xl md:shadow-none relative">
        <DocsSidebar class="min-h-full" />
        
        <!-- Swipe handle (visible only on mobile) -->
        <div class="md:hidden absolute top-1/2 right-2 -translate-y-1/2 w-1 h-12 bg-white/40 rounded-full"></div>
      </div>
    </div>
    
    <!-- Main Content Area -->
    <main class="flex-grow p-6 sm:p-10 lg:p-16 overflow-y-auto flex flex-col min-w-0">
      <RouterView />
    </main>
  </div>
</template>
