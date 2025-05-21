<template>
  <NuxtMarquee
    class="marquee-wrapper"
    :auto-fill="true"
    :pause-on-hover="true"
    style="gap: 12px"
  >
    <slot />
  </NuxtMarquee>
</template>
