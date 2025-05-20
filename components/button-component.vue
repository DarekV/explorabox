<template>
  <div
    class="w-fit h-11 px-6 rounded-xl flex items-center justify-center"
    :class="buttonClasses"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  color?: 'primary' | 'secondary'
}>(), {
  color: 'primary',
})

const buttonClasses = computed(() => {
  return {
    'bg-primary': props.color === 'primary',
    'bg-secondary': props.color === 'secondary',
  }
})
</script>
