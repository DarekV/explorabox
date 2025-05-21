<template>
  <div class="font-regular font-primary text-body bg-background overflow-x-hidden">
    <header-section />
    <slot />
    <footer-section />
  </div>
</template>

<script setup lang="ts">
import FooterSection from '~/components/footer-section.vue'
</script>
