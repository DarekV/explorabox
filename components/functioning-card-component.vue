<template>
  <div class="flex flex-col items-center gap-8">
    <NuxtImg
      :src="`img/${props.image}`"
      class="h-40"
    />
    <div class="flex flex-col items-center gap-4">
      <p class="text-featured-mobile md:text-featured">
        {{ props.title }}
      </p>
      <p>{{ props.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})
</script>
