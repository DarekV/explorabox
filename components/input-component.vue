<template>
  <div class="w-full">
    <p>{{ title }}</p>
    <textarea
      :rows="rows"
      type="text"
      :placeholder="placeholder"
      class="w-full py-3 min-h-11 mt-1 px-5 bg-background text-black rounded-[12px] focus:outline-none"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Titre par défaut',
  },
  placeholder: {
    type: String,
    default: 'Placeholder par défaut',
  },
  rows: {
    type: Number,
    default: 1,
  },
})
</script>
