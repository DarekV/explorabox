<template>
  <div class="relative">
    <div
      class="relative z-10 pt-40 grid grid-cols-1 gap-5 items-start md:gap-8 lg:gap-10 md:grid-cols-12 max-w-[1440px] pb-8 mx-auto px-5 md:px-8 xl:px-10"
    >
      <h2 class="col-span-10 md:col-start-2 text-h2-mobile md:text-h2">
        Contactez-nous
      </h2>
      <div class="flex flex-col gap-4 mt-8 md:mt-12 md:col-start-2 col-span-12 md:col-span-5">
        <input-component
          class="w-full"
          title="Email"
          placeholder="Example@mail.ch"
        />
        <input-component
          class="w-full"
          title="Prénom"
          placeholder="Marc"
        />
        <input-component
          class="w-full"
          title="Nom"
          placeholder="Donald"
        />
        <input-component
          :rows="2"
          class="w-full h-20"
          title="Message"
          placeholder="Ecrivez-nous un beau message !"
        />
        <div class="mt-10 flex justify-end">
          <button-component>Envoyer</button-component>
        </div>
      </div>
      <NuxtImg
        class="w-full h-full object-cover col-span-12 md:col-span-5 rounded-[50px]"
        src="/img/work-place.png"
        alt="lieu de travail"
      />
    </div>
    <div
      class="absolute text-secondary w-[40%] h-auto transform right-40 md:-right-20 bottom-80"
    >
      <decoration-svg />
    </div>
  </div>
</template>

<script setup lang="ts">
import DecorationSvg from '~/components/decoration-svg.vue'
</script>
