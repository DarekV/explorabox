<template>
  <div class="relative">
    <div
      class="relative z-10 max-w-[1440px] py-40 mx-auto px-5 md:px-8 xl:px-10 grid items-center grid-cols-12 gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="col-span-12 md:col-start-2 text-h2-mobile md:text-h2">
        Merci de votre confiance
      </h2>
      <NuxtImg
        src="/img/hero-image.png"
        alt="hero image"
        class="w-full rounded-[50px] lg:col-start-2 col-span-12 md:col-span-6 lg:col-span-5"
      />
      <div class="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col gap-6 ">
        <p class="text-featured-mobile md:text-featured">
          Et mainenant ?
        </p>
        <p>
          1. Vous recevrez sous peu un e-mail de confirmation contenant toutes les informations pratiques.<br><br>
          2. Créez (ou accédez à) votre compte dans l’application pour personnaliser vos préférences et sélectionner vos
          dates.<br><br>
          3. Restez à l’écoute… Vos premières surprises arriveront bientôt.
        </p>
        <div class="flex flex-col md:flex-row gap-6">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button-component>
              Télécharger (IOS)
              <Icon
                class="ml-2"
                name="eb:external"
              />
            </button-component>
          </a>
          <a
            href="https://play.google.com/store/apps?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button-component>
              Télécharger (Google Play)
              <Icon
                class="ml-2"
                name="eb:external"
              />
            </button-component>
          </a>
        </div>
      </div>
    </div>
    <div
      class="text-secondary absolute w-[30%] h-auto -right-10 top-80"
    >
      <decoration-svg />
    </div>
  </div>
</template>

<script setup lang="ts">
import DecorationSvg from '~/components/decoration-svg.vue'
</script>
