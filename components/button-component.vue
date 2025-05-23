<template>
  <div
    class="w-fit h-11 px-6 rounded-xl flex items-center justify-center duration-300 hover:cursor-pointer"
    :class="[
      `bg-${props.color}`,
      props.color === 'primary' ? 'hover:bg-primary-dark' : '',
      props.color === 'secondary' ? 'hover:bg-secondary-dark' : '']"
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
