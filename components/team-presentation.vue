<template>
  <div class="relative">
    <div
      class="relative z-10 max-w-[1440px] py-40 mx-auto px-5 md:px-8 xl:px-10 grid items-center grid-cols-12 gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="col-span-12 md:col-start-2 text-h2-mobile md:text-h2">
        Notre équipe
      </h2>
      <NuxtImg
        src="/img/team-photo.png"
        class="w-full rounded-[50px] lg:col-start-2 col-span-12 md:col-span-6 lg:col-span-5"
      />
      <div class="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col gap-6 ">
        <p>
          À l’origine d’ExploraBox, il y a Camille Morel, Jérôme Sutter et Lina Alvarez — trois ami·e·s passionné·e·s
          par
          l’aventure, les détours imprévus et l’art de s’émerveiller près de chez soi. Issu·e·s respectivement du
          design,
          du tourisme et de la communication, ils·elles ont réuni leurs expertises autour d’une même conviction : il
          n’est
          pas nécessaire de traverser le monde pour vivre des moments forts.<br>
          <br>
          Tous trois ont connu ce besoin de déconnecter, cette envie de faire quelque chose de nouveau sans passer des
          heures à tout organiser. Alors ils·elles ont créé ce qu’ils·elles cherchaient : une plateforme qui surprend,
          qui
          fait vibrer, et qui remet la curiosité au cœur de l’expérience.
        </p>
      </div>
    </div>
    <div
      class="text-primary absolute w-[30%] h-auto -right-10 top-80"
    >
      <decoration-svg />
    </div>
  </div>
</template>

<script setup lang="ts">
import DecorationSvg from '~/components/decoration-svg.vue'
</script>
