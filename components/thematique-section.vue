<template>
  <div class="bg-background-dark text-white">
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
            Aventure, bien-être, artisanat, moments en famille ou explorations urbaines
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
    title: 'Sensations fortes',
    subtitle: 'Vous n’êtes pas prêt·e… et c’est parfait.',
    content: 'Préparez-vous à repousser vos limites. Entre ciel, terre et eau, ces expériences font battre le cœur plus fort et réveillent l’instinct d’aventure. Adrénaline garantie, sans jamais perdre le contrôle.',
  },
  {
    image: 'family-photo.jpg',
    title: 'Sensations fortes',
    subtitle: 'Vous n’êtes pas prêt·e… et c’est parfait.',
    content: 'Préparez-vous à repousser vos limites. Entre ciel, terre et eau, ces expériences font battre le cœur plus fort et réveillent l’instinct d’aventure. Adrénaline garantie, sans jamais perdre le contrôle.',
  },
  {
    image: 'creation-photo.jpg',
    title: 'Sensations fortes',
    subtitle: 'Vous n’êtes pas prêt·e… et c’est parfait.',
    content: 'Préparez-vous à repousser vos limites. Entre ciel, terre et eau, ces expériences font battre le cœur plus fort et réveillent l’instinct d’aventure. Adrénaline garantie, sans jamais perdre le contrôle.',
  },
  {
    image: 'relax-photo.jpg',
    title: 'Sensations fortes',
    subtitle: 'Vous n’êtes pas prêt·e… et c’est parfait.',
    content: 'Préparez-vous à repousser vos limites. Entre ciel, terre et eau, ces expériences font battre le cœur plus fort et réveillent l’instinct d’aventure. Adrénaline garantie, sans jamais perdre le contrôle.',
  },
]
</script>
