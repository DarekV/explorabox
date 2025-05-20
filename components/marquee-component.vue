<template>
  <NuxtMarquee
    :auto-fill="true"
    :pause-on-hover="true"
    style="--gap: 12px"
  >
    <slot />
  </NuxtMarquee>
</template>

<script setup lang="ts">
</script>
