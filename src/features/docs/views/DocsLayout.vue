<script setup>
import { RouterView } from 'vue-router'
import DocsSidebar from '../components/DocsSidebar.vue'
</script>

<template>
  <div class="max-w-7xl mx-auto w-full flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
    <!-- Sidebar -->
    <DocsSidebar />
    
    <!-- Main Content Area -->
    <main class="flex-grow p-6 sm:p-10 lg:p-16 overflow-y-auto">
      <RouterView />
    </main>
  </div>
</template>
