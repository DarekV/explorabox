<template>
  <div
    class=" w-screen h-fit lg:min-h-screen lg:w-fit lg:h-auto pt-[120px] pb-6 px-5 md:px-8 xl:px-10 shadow-[2px_4px_10px_rgba(0,0,0,0.10)]"
  >
    <h2 class="text-h2-mobile md:text-h2">
      Réservation
    </h2>
    <div class="flex flex-row lg:flex-col gap-2 lg:gap-4 mt-6 lg:mt-20">
      <div class="flex flex-col lg:flex-row items-center gap-6">
        <div
          class="flex items-center justify-center w-11 h-11 rounded-full"
          :class="{ 'bg-primary': selected >= 1, 'border-5 border-primary': selected <= 1 }"
        >
          <p class="text-featured-mobile md:text-featured">
            1
          </p>
        </div>
        <p class="hidden w-max md:block text-body text-center">
          Sélection de la formule
        </p>
      </div>
      <div class="w-full h-1 lg:w-1 lg:h-4 mt-5 lg:mt-0 lg:ml-5 bg-primary rounded-full" />
      <div class="flex flex-col lg:flex-row items-center gap-6">
        <div
          class="flex items-center justify-center w-11 h-11 rounded-full"
          :class="{ 'bg-primary': selected >= 2, 'border-5 border-primary': selected <= 2 }"
        >
          <p class="text-featured-mobile md:text-featured">
            1
          </p>
        </div>
        <p class="hidden w-max md:block text-body text-center">
          Sélection de la formule
        </p>
      </div>
      <div class="w-full h-1 lg:w-1 lg:h-4 mt-5 lg:mt-0 lg:ml-5 bg-primary rounded-full" />
      <div class="flex flex-col lg:flex-row items-center gap-6">
        <div
          class="flex items-center justify-center w-11 h-11 rounded-full"
          :class="{ 'bg-primary': selected >= 3, 'border-5 border-primary': selected <= 3 }"
        >
          <p class="text-featured-mobile md:text-featured">
            1
          </p>
        </div>
        <p class="hidden w-max md:block text-body text-center">
          Sélection de la formule
        </p>
      </div>
      <div class="w-full h-1 lg:w-1 lg:h-4 mt-5 lg:mt-0 lg:ml-5 bg-primary rounded-full" />
      <div class="flex flex-col lg:flex-row items-center gap-6">
        <div
          class="flex items-center justify-center w-11 h-11 rounded-full"
          :class="{ 'bg-primary': selected >= 4, 'border-5 border-primary': selected <= 4 }"
        >
          <p class="text-featured-mobile md:text-featured">
            1
          </p>
        </div>
        <p class="hidden w-max md:block text-body text-center">
          Sélection de la formule
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  selected: {
    type: Number,
    default: 1,
  },
})
</script>
