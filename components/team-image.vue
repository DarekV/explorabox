<template>
  <div class="relative max-w-[1440px] pb-40 mx-auto px-5 md:px-8 xl:px-10">
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-10">
      <card-component
        image="camille.png"
        subtitle="Camille Morel"
        content="Directrice Créative"
      />
      <card-component
        image="jerome.png"
        subtitle="Jérôme Sutter"
        content="Responsable Expériences & Logistique"
      />
      <card-component
        image="lina.png"
        subtitle="Lina Alvarez"
        content="Cheffe Produit & UX"
      />
      <card-component
        image="niels.png"
        subtitle="Niels Baumann"
        content="Responsable Communication & Partenariats"
      />
    </div>
    <div
      class="text-secondary absolute w-[30%] h-auto transform rotate-90 left-0 top-80"
    >
      <decoration-svg />
    </div>
  </div>
</template>

<script setup lang="ts">
import DecorationSvg from '~/components/decoration-svg.vue'
</script>
