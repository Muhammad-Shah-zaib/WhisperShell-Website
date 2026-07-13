<script setup>
import { Icon } from '@iconify/vue'
import versions from '@/core/data/versions.json'
</script>

<template>
  <section class="w-full py-20 px-4 sm:px-6 lg:px-8 border-b border-surface-container">
    <div class="max-w-7xl mx-auto">
      
      <h2 class="font-heading text-3xl font-bold text-on-background mb-10">
        Version History
      </h2>

      <!-- Table Container -->
      <div class="w-full overflow-x-auto">
        <table class="w-full text-left border-collapse min-w-[800px]">
          <!-- Table Head -->
          <thead>
            <tr class="border-b border-surface-container-high bg-surface-container-lowest">
              <th class="py-4 px-6 font-mono text-xs text-on-surface-variant font-bold uppercase tracking-wider w-1/4">Version</th>
              <th class="py-4 px-6 font-mono text-xs text-on-surface-variant font-bold uppercase tracking-wider w-1/4">Release Date</th>
              <th class="py-4 px-6 font-mono text-xs text-on-surface-variant font-bold uppercase tracking-wider w-1/4">Size</th>
              <th class="py-4 px-6 font-mono text-xs text-on-surface-variant font-bold uppercase tracking-wider text-right w-1/4">Action</th>
            </tr>
          </thead>
          <!-- Table Body -->
          <tbody>
            <tr 
              v-for="(item, index) in versions" 
              :key="item.version"
              class="border-b border-surface-container-high hover:bg-surface-container transition-colors"
            >
              <td class="py-6 px-6 flex items-center space-x-3">
                <span class="font-mono text-sm font-medium text-on-background">{{ item.version }}</span>
                <span v-if="item.isLatest" class="inline-block px-2 py-0.5 rounded bg-surface-variant text-on-surface font-mono text-[10px] font-bold tracking-wider">LATEST</span>
              </td>
              <td class="py-6 px-6 font-sans text-sm text-on-surface-variant">{{ item.date }}</td>
              <td class="py-6 px-6 font-mono text-sm text-on-surface-variant font-medium">{{ item.size }}</td>
              <td class="py-6 px-6 text-right">
                <div class="flex items-center justify-end">
                  <a :href="item.downloadUrl" class="inline-flex items-center justify-center w-10 h-10 rounded-full border border-surface-container-high text-on-surface-variant hover:text-primary hover:border-primary transition-colors">
                    <Icon icon="mdi:download" class="w-5 h-5" />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </section>
</template>
