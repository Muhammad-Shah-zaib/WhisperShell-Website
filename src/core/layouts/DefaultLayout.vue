<script setup>
import { RouterView } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import MobileBottomNav from '../components/MobileBottomNav.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background text-on-background pb-24 md:pb-0 relative">
    <Header />
    <main class="flex-grow flex flex-col">
      <RouterView />
    </main>
    <Footer />
    <MobileBottomNav />
  </div>
</template>
