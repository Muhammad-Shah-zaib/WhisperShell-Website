<script setup>
defineProps({
  tabs: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex space-x-1 bg-surface-container p-1 rounded-lg border border-surface-container-high w-fit mb-6">
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="$emit('update:modelValue', tab)"
      class="px-4 py-2 text-sm font-sans font-semibold rounded-md transition-all duration-200 cursor-pointer"
      :class="modelValue === tab 
        ? 'bg-primary text-on-primary shadow-sm' 
        : 'text-on-surface-variant hover:text-on-background hover:bg-surface-container-high'
      "
    >
      {{ tab }}
    </button>
  </div>
</template>
