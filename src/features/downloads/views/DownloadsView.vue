<script setup>
import { onMounted } from 'vue'
import DownloadHeroSection from '../components/DownloadHeroSection.vue'
import VersionHistorySection from '../components/VersionHistorySection.vue'
import NvidiaDriverSection from '../components/NvidiaDriverSection.vue'

onMounted(() => {
  if (localStorage.getItem('whispershell_downloads_confetti_fired')) {
    return
  }
  localStorage.setItem('whispershell_downloads_confetti_fired', 'true')
  launchConfetti()
})

function launchConfetti() {
  const canvas = document.createElement('canvas')
  canvas.style.position = 'fixed'
  canvas.style.top = '0'
  canvas.style.left = '0'
  canvas.style.width = '100vw'
  canvas.style.height = '100vh'
  canvas.style.pointerEvents = 'none'
  canvas.style.zIndex = '9999'
  document.body.appendChild(canvas)
  
  const ctx = canvas.getContext('2d')
  let width = canvas.width = window.innerWidth
  let height = canvas.height = window.innerHeight
  
  const handleResize = () => {
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
  }
  window.addEventListener('resize', handleResize)
  
  const colors = ['#d2bcfb', '#a78bfa', '#f472b6', '#38bdf8', '#fbbf24', '#34d399']
  const confettiCount = 150
  const particles = []
  
  class Particle {
    constructor() {
      this.x = Math.random() * width
      this.y = Math.random() * -height - 20
      this.size = Math.random() * 8 + 4
      this.color = colors[Math.floor(Math.random() * colors.length)]
      this.speed = Math.random() * 5 + 3
      this.angle = Math.random() * 360
      this.spin = Math.random() * 4 - 2
    }
    update() {
      this.y += this.speed
      this.angle += this.spin
      this.x += Math.sin(this.y / 30) * 0.5
    }
    draw() {
      ctx.save()
      ctx.translate(this.x, this.y)
      ctx.rotate(this.angle * Math.PI / 180)
      ctx.fillStyle = this.color
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
      ctx.restore()
    }
  }
  
  for (let i = 0; i < confettiCount; i++) {
    particles.push(new Particle())
  }
  
  let animationFrameId
  let frameCount = 0
  
  function animate() {
    ctx.clearRect(0, 0, width, height)
    let activeParticles = 0
    
    particles.forEach(p => {
      if (p.y < height + 20) {
        p.update()
        p.draw()
        activeParticles++
      }
    })
    
    frameCount++
    
    if (activeParticles > 0 && frameCount < 300) {
      animationFrameId = requestAnimationFrame(animate)
    } else {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      canvas.remove()
    }
  }
  
  animate()
}
</script>

<template>
  <div>
    <DownloadHeroSection />
    <VersionHistorySection />
    <NvidiaDriverSection />
  </div>
</template>
