<template>
  <div
    class="w-fit h-11 px-6 rounded-xl flex items-center justify-center"
    :class="`bg-${props.color}`"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
})
</script>
