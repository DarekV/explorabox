<template>
  <div class="w-[320px] m-2.5  p-5 flex flex-col gap-4 rounded-xl border">
    <div class="flex flex-row gap-3">
      <NuxtImg
        :src="`/img/${props.image}`"
        class="w-12 h-12 object-cover rounded-full"
      />
      <div />
      <div class="flex flex-col">
        <p class="text-featured-mobile md:text-featured">
          {{ name }}
        </p>
        <p class="text-small">
          {{ age }} - {{ location }}
        </p>
      </div>
    </div>
    <div>
      <p class="font-bold">
        {{ quote }}
      </p>
      <p>
        {{ review }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    default: 'price-photo.png',
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
})
</script>
