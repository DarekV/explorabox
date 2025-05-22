<template>
  <div class="w-full">
    <p>{{ title }}</p>
    <textarea
      v-if="type === 'text'"
      :rows="rows"
      type="text"
      :placeholder="placeholder"
      class="w-full py-3 min-h-11 mt-1 px-5 bg-background text-black rounded-[12px] focus:outline-none"
    />
    <input
      v-if="type === 'date'"
      type="date"
      class="w-full py-3 min-h-11 mt-1 px-5 bg-background text-black rounded-[12px] focus:outline-none"
    >
    <div
      v-if="type === 'select'"
      class="relative"
    >
      <select
        class=" w-full h-12 px-4 pr-10 rounded-[12px] bg-background appearance-none relative"
      >
        <slot />
      </select>
      <Icon
        name="eb:chevron"
        class="absolute pointer-events-none right-3 top-4 !w-4  text-black"
      />
    </div>
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
  type: {
    type: String,
    default: 'text',
  },
})
</script>
