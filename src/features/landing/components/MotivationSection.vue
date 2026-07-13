<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { APP_NAME } from '@/core/constants'

const containerRef = ref(null)
const targetPos = { x: 0, y: 0 }
const currentPos = ref({ x: 0, y: 0 })
const isHovering = ref(false)
let animationFrameId = null
let time = 0

const handleMouseMove = (e) => {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  targetPos.x = e.clientX - rect.left
  targetPos.y = e.clientY - rect.top
}

const handleMouseEnter = () => {
  isHovering.value = true
}

const handleMouseLeave = () => {
  isHovering.value = false
}

const animate = () => {
  time += 0.02
  
  // If not hovering, gracefully float in the bottom-right corner and wobble
  if (!isHovering.value && containerRef.value) {
    const rect = containerRef.value.getBoundingClientRect()
    const idleX = rect.width - 200
    const idleY = rect.height - 200
    targetPos.x = idleX + Math.sin(time) * 60
    targetPos.y = idleY + Math.cos(time * 0.8) * 40
  }

  // Smooth fluid lerping interpolation
  currentPos.value.x += (targetPos.x - currentPos.value.x) * 0.05
  currentPos.value.y += (targetPos.y - currentPos.value.y) * 0.05
  
  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  // Init positions to bottom-right
  if (containerRef.value) {
    const rect = containerRef.value.getBoundingClientRect()
    targetPos.x = rect.width - 200
    targetPos.y = rect.height - 200
    currentPos.value.x = targetPos.x
    currentPos.value.y = targetPos.y
  }
  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId)
})
</script>

<style scoped>
@keyframes morph {
  0% {
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  }
  34% {
    border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
  }
  67% {
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
  }
  100% {
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  }
}

.jelly-bubble {
  animation: morph 8s ease-in-out infinite;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 60%);
  box-shadow: 
    inset 10px 10px 30px rgba(255, 255, 255, 0.05),
    inset -10px -10px 30px rgba(169, 136, 242, 0.15),
    0 20px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(16px) brightness(1.2);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
</style>

<template>
  <section 
    ref="containerRef"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    class="relative w-full py-24 sm:py-32 overflow-hidden border-y border-surface-container-high"
    style="background: radial-gradient(100% 100% at 0% 0%, rgba(169, 136, 242, 0.12) 0%, #0A0A0B 100%);"
  >
    <!-- Jelly Morphing Glass Bubble -->
    <div class="pointer-events-none absolute inset-0 z-0">
      <div 
        class="absolute jelly-bubble"
        :style="{
          width: '350px',
          height: '350px',
          transform: `translate(${currentPos.x - 175}px, ${currentPos.y - 175}px)`,
          willChange: 'transform, border-radius'
        }"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
      
      <div class="mb-10 pointer-events-auto">
        <h2 class="font-heading text-3xl sm:text-5xl font-extrabold text-on-background tracking-tight">
          The Motivation Behind <span class="uppercase text-primary">{{ APP_NAME }}</span>
        </h2>
      </div>

      <div class="text-lg sm:text-xl font-sans text-on-surface-variant leading-relaxed pointer-events-auto text-justify">
        <p>
          Prompting is very important, but typing can break your flow. Sometimes you forget small details before you finish a sentence. There are open-source dictation tools, but they often crash, miss text, or have stability issues on Wayland. Fixing them requires constantly restarting from the terminal. Other good tools require paid subscriptions. That is why we built <span class="uppercase text-primary">{{ APP_NAME }}</span>. It is a free, simple voice to text dictation tool for Wayland distros, giving you a smooth and secure experience.
        </p>
      </div>
    </div>
  </section>
</template>
