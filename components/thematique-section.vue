<template>
  <div class="relative z-10 bg-background-dark text-white">
    <div
      class="relative max-w-[1440px] pt-40 pb-40 mx-auto px-5 md:px-8 xl:px-10 grid grid-cols-12 gap-5 md:gap-8 lg:gap-10"
    >
      <div class="col-span-12 flex flex-row justify-between items-center md:col-span-8 lg:col-start-5">
        <h2 class="text-h2-mobile md:text-h2">
          Nos thématiques
        </h2>
        <div class="hidden lg:flex flex-row gap-6 text-black">
          <button-component @click="swiper.prev()">
            previous
          </button-component>
          <button-component @click="swiper.next()">
            next
          </button-component>
        </div>
      </div>
      <div class="mb-8 col-span-12 lg:col-span-4 flex flex-col gap-6 lg:gap-12">
        <div class="flex flex-col gap-4">
          <p class="text-featured-mobile md:text-featured">
            Aventure, bien-être, artisanat, moments en famille ou explorations urbaines en Suisse !
          </p>
          <p>
            Sélectionnez ce qui vous inspire, sans rien connaître à l’avance. Chaque activité est pensée autour de votre
            univers… mais le contenu, lui, reste secret jusqu’au bout.
          </p>
        </div>
        <button-component class="text-black">
          Réserver
        </button-component>
      </div>
      <div class="relative col-span-12 lg:col-span-8">
        <div
          class="relative w-full flex flex-row flex-nowrap items-center justify-center gap-5 md:gap-8 lg:gap-10"
        >
          <swiper-container
            ref="containerRef"
            class="w-full"
          >
            <swiper-slide
              v-for="(slide, index) in slides"
              :key="index"
            >
              <card-component
                :image="slide.image"
                :title="slide.title"
                :subtitle="slide.subtitle"
                :content="slide.content"
              />
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
      <div class="flex col-span-12 lg:hidden flex-row justify-end gap-6 text-black">
        <button-component @click="swiper.prev()">
          previous
        </button-component>
        <button-component @click="swiper.next()">
          next
        </button-component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSwiper } from '#imports'

const containerRef = ref(null)

const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 32 },
    1024: { slidesPerView: 2, spaceBetween: 40 },
  },
})

const slides = [
  {
    image: 'action-photo.jpg',
    title: 'Sensations fortes',
    subtitle: 'Vous n’êtes pas prêt·e… et c’est parfait.',
    content: 'Préparez-vous à repousser vos limites. Entre ciel, terre et eau, ces expériences font battre le cœur plus fort et réveillent l’instinct d’aventure. Adrénaline garantie, sans jamais perdre le contrôle.',
  },
  {
    image: 'urbain-photo.jpg',
    title: 'Aventures urbaines',
    subtitle: 'Redécouvez les villes Suisses',
    content: 'Derrière les façades familières, des univers insoupçonnés vous attendent. Parcourez les villes autrement, découvrez des lieux tenus secrets et plongez dans des ambiances qui ne se dévoilent qu’aux plus curieux·ses.',
  },
  {
    image: 'family-photo.jpg',
    title: 'Moments en famille',
    subtitle: 'Des moments pensés pour petits et grands',
    content: 'Des moments pensés pour petits et grands, où l’on partage le rire, l’étonnement et l’aventure. Ensemble, vivez des expériences qui soudent, amusent et laissent des souvenirs pour longtemps.',
  },
  {
    image: 'creation-photo.jpg',
    title: 'Trésors d\'artisanat',
    subtitle: 'Au cœur de l’artisanat Suisse',
    content: 'Passez de l’autre côté du décor et mettez les mains à la pâte. Créatif·ve, curieux·se ou simplement gourmand·e, vous explorez les coulisses de savoir-faire uniques, guidé·e par des passionné·e·s. Une immersion où l’on touche, transforme, assemble… et parfois déguste.',
  },
  {
    image: 'relax-photo.jpg',
    title: 'Escapades bien-être',
    subtitle: 'Laissez-vous porter par la douceur',
    content: 'Offrez-vous une parenthèse aussi agréable qu’inattendue. Qu’il s’agisse de reconnecter avec votre corps ou d’éveiller vos sens, ces escapades vous recentrent, vous apaisent et réenchantent le quotidien.',
  },
]
</script>
