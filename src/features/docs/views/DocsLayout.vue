<script setup>
import { RouterView } from 'vue-router'
import DocsSidebar from '../components/DocsSidebar.vue'
</script>

<template>
  <div class="max-w-7xl mx-auto w-full flex flex-col md:flex-row flex-grow">
    <!-- Sidebar -->
    <DocsSidebar />
    
    <!-- Main Content Area -->
    <main class="flex-grow p-6 sm:p-10 lg:p-16 overflow-y-auto flex flex-col">
      <RouterView />
    </main>
  </div>
</template>
