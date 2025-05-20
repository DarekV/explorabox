<template>
  <div
    class="relative p-5 rounded-[12px]"
    :class="`bg-${props.color}`"
  >
    <p class="mt-4 mb-3 text-card-title-mobile md:text-card-title">
      {{ title }}
    </p>
    <p class="mb-2 text-featured-mobile md:text-featured">
      {{ subtitle }}
    </p>
    <p>{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
})
</script>
