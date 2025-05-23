<template>
  <div class="mt-6 grid grid-cols-2 lg:grid-cols-4">
    <div class="lg:col-span-2">
      <p>{{ name }} :</p>
    </div>
    <div class="col-span-1 lg:col-span-2">
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
})
</script>
