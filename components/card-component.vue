<template>
  <div class="relative">
    <NuxtImg
      v-if="props.image"
      :src="`img/${props.image}`"
      class="w-full h-[350px] object-cover rounded-[12px]"
    />
    <div>
      <p class="mt-4 mb-3 text-card-title-mobile md:text-card-title">
        {{ title }}
      </p>
      <p class="mb-1 text-featured-mobile md:text-featured">
        {{ subtitle }}
      </p>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  subtitle: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
})
</script>
