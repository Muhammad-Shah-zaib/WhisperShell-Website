<script setup>
import { Icon } from '@iconify/vue'
import { APP_NAME } from '@/core/constants'
</script>

<template>
  <section class="w-full py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      
      <!-- Header -->
      <div class="mb-10 text-center sm:text-left">
        <h2 class="font-heading text-3xl font-bold text-on-background mb-4">
          NVIDIA Driver Requirements
        </h2>
        <p class="font-sans text-lg text-on-surface-variant max-w-4xl leading-relaxed">
          {{ APP_NAME }} automatically detects and utilizes your NVIDIA GPU for high-speed offline transcription. If no supported GPU is found, it will fall back to CPU-only execution. To enable GPU acceleration, verify your proprietary NVIDIA drivers are installed and functioning by running the <code class="bg-surface-container px-2 py-1 rounded text-primary font-mono text-sm">nvidia-smi</code> command.
        </p>
      </div>

      <!-- Terminal Output -->
      <div class="bg-[#0e0e0e] border border-surface-container-high rounded-xl overflow-hidden shadow-2xl">
        <div class="flex items-center px-4 py-3 bg-surface-container border-b border-surface-container-high">
          <div class="flex space-x-2">
            <div class="w-3 h-3 rounded-full bg-error"></div>
            <div class="w-3 h-3 rounded-full bg-tertiary"></div>
            <div class="w-3 h-3 rounded-full bg-primary-container"></div>
          </div>
          <span class="ml-4 font-mono text-xs text-on-surface-variant uppercase tracking-wider">user@linux:~</span>
        </div>
        <div class="p-6 overflow-x-auto">
          <pre class="font-mono text-xs sm:text-sm text-on-surface-variant leading-relaxed">
<span class="text-primary">user@linux:~$</span> nvidia-smi
Mon Jul 13 16:54:47 2026       
+-----------------------------------------------------------------------------------------+
| NVIDIA-SMI 595.80                 Driver Version: 595.80         CUDA Version: 13.2     |
+-----------------------------------------+------------------------+----------------------+
| GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
|                                         |                        |               MIG M. |
|=========================================+========================+======================|
|   0  NVIDIA RTX A2000 Laptop GPU    Off |   00000000:01:00.0 Off |                  N/A |
| N/A   60C    P8            752W /   40W |    1589MiB /   4096MiB |      0%      Default |
|                                         |                        |                  N/A |
+-----------------------------------------+------------------------+----------------------+

+-----------------------------------------------------------------------------------------+
| Processes:                                                                              |
|  GPU   GI   CI              PID   Type   Process name                        GPU Memory |
|        ID   ID                                                               Usage      |
|=========================================================================================|
|    0   N/A  N/A            3876      G   /usr/bin/gnome-shell                      1MiB |
|    0   N/A  N/A          141409    C+G   <span class="text-on-background font-bold">/usr/bin/whispershell</span>                  1563MiB |
+-----------------------------------------------------------------------------------------+
</pre>
        </div>
      </div>

    </div>
  </section>
</template>
