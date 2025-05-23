<template>
  <div
    class="max-w-[1440px] mt-[100px] md:mt-40 mx-auto px-5 md:px-8 xl:px-10 grid-cols-12 grid gap-5 md:gap-8 xl:gap-10"
  >
    <div class="flex flex-col gap-6 justify-end col-span-12 order-2 md:order-1 md:col-span-5">
      <p class="text-h1-mobile lg:text-h1">
        Voyage surprise<br>en
        <span
          class="relative inline-block bg-[url('/img/text-highlight.svg')] bg-no-repeat bg-contain bg-center"
        >
          Suisse
        </span>
      </p>
      <p class="text-body">
        Vous avez envie de sortir des sentiers battus sans passer des heures
        à planifier ?<br>

        ExploraBox vous propose de vivre jusqu’à 10 expériences surprises par an, choisies selon vos envies, mais dont
        vous ne connaîtrez les détails qu’au dernier moment.
      </p>
    </div>
    <NuxtImg
      class="w-full max-h-[600px] overflow-visible object-cover col-span-12 md:col-span-7 order-1 md:order-2 md:mb-30"
      src="/img/hero-image.png"
      alt="hero image"
    />
  </div>
  <marquee-component class="bg-tertiary text-white py-2 mt-16">
    <p class="text-card-title-mobile md:text-card-title">
      ExploraBox — 10 activités surprises · Sans organisation, juste de l’émotion · La Suisse comme vous ne l’avez
      jamais vue
    </p>
    <div class="w-5 h-5 rounded-full bg-primary mx-4" />
  </marquee-component>
</template>

<script setup lang="ts">
</script>
