<template>
  <div class="relative my-40 max-w-[1440px] mx-auto px-5 md:px-8 xl:px-10 ">
    <div class="relative z-10 text-center grid grid-cols-12 gap-6">
      <h2 class="text-h2-mobile col-span-12 md:text-h2 md:col-start-4 md:col-span-6">
        ExploraBox<br>
        c’est <span
          class="relative inline-block bg-[url('/img/text-highlight.svg')] bg-no-repeat bg-contain bg-center"
        >
          pour qui
        </span> ?
      </h2>
      <p class="col-span-12 md:col-start-4 md:col-span-6">
        Pour les amateurs·trices de surprises, les curieux·ses en quête d’originalité, les familles qui veulent s’amuser
        autrement, les explorateurs·trices du dimanche
        ou les amoureux du bien-être.<br><br>
        En solo, en duo ou à plusieurs, chaque expérience est adaptée pour que le plaisir de la découverte soit au
        centre.
      </p>
    </div>
    <div class="relative z-10 mt-20 grid grid-cols-12 gap-6 md:gap-8 lg:gap-10 self-center">
      <card-colored-component
        class="col-span-12 md:col-span-6 lg:col-span-4"
        color="primary"
        :title="'L’expérience avant tout'"
        :subtitle="'Des activités inédites, loin des clichés'"
        :content="'ExploraBox sélectionne pour vous des expériences insolites et étonnantes que vous n’auriez jamais pensé rechercher. Que vous soyez amateur de frissons, de découvertes culturelles, ou de plaisirs sensoriels, chaque escapade vous réserve une surprise authentique, soigneusement choisie pour éveiller votre curiosité.'"
      />
      <card-colored-component
        class="lg:mt-20 col-span-12 md:col-span-6 lg:col-span-4"
        color="secondary"
        :title="'L’expérience avant tout'"
        :subtitle="'Des activités inédites, loin des clichés'"
        :content="'ExploraBox sélectionne pour vous des expériences insolites et étonnantes que vous n’auriez jamais pensé rechercher. Que vous soyez amateur de frissons, de découvertes culturelles, ou de plaisirs sensoriels, chaque escapade vous réserve une surprise authentique, soigneusement choisie pour éveiller votre curiosité.'"
      />
      <card-colored-component
        class="lg:mt-40 col-span-12 md:col-span-6 lg:col-span-4 md:col-start-4"
        color="tertiary-light"
        :title="'L’expérience avant tout'"
        :subtitle="'Des activités inédites, loin des clichés'"
        :content="'ExploraBox sélectionne pour vous des expériences insolites et étonnantes que vous n’auriez jamais pensé rechercher. Que vous soyez amateur de frissons, de découvertes culturelles, ou de plaisirs sensoriels, chaque escapade vous réserve une surprise authentique, soigneusement choisie pour éveiller votre curiosité.'"
      />
    </div>
    <div
      class="text-secondary absolute w-[30%] h-auto transform rotate-180 -left-20 top-80"
    >
      <decoration-svg />
    </div>
  </div>
</template>

<script setup lang="ts">
import DecorationSvg from '~/components/decoration-svg.vue'
</script>
