<template>
  <div class="relative z-50 bg-background-dark text-white">
    <div class="max-w-[1440px] pt-20 pb-8 mx-auto px-5 md:px-8 xl:px-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        <div>
          <p class="text-h2-mobile md:text-h2">
            ExploraBox
          </p>
          <p>Attendez-vous à l'inattendu</p>
          <div class="mt-20 flex align-center gap-3 transform -translate-x-1.5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-11 h-11 flex items-center justify-center"
            >
              <Icon
                name="eb:facebook"
                class="!w-8 !h-8"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-11 h-11 flex items-center justify-center"
            >
              <Icon
                name="eb:instagram"
                class="!w-8 !h-8"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-11 h-11 flex items-center justify-center"
            >
              <Icon
                name="eb:linkedin"
                class="!w-8 !h-8"
              />
            </a>
          </div>
        </div>
        <div class="flex flex-col gap-2 justify-end">
          <p class="text-card-title-mobile md:text-card-title">
            Newsletter
          </p>
          <p>Restez informé des nouveautés touristiques en Suisse.</p>
          <div class="w-full flex items-center justify-left">
            <input
              type="email"
              placeholder="Example@mail.ch"
              required
              class="w-full max-w-[350px] h-11 px-5 bg-background text-black rounded-l-[12px] focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
            <button
              class="h-11 flex items-center px-5 rounded-r-[12px] bg-primary text-black"
              type="submit"
            >
              S'abonner
            </button>
          </div>
        </div>
        <div class="flex items-end">
          <p class="leading-[23px]">
            ExploraBox<br>
            site de blueFACTORY Fribourg Passage du Cardinal 11 1700 Fribourg<br>
            +41 (0)26 500 00 00<br>
            hello@explora.box
          </p>
        </div>
      </div>
    </div>
    <div
      class="py-8 bg-white "
    >
      <div class="flex flex-wrap gap-8 items-center justify-end  max-w-[1440px] mx-auto px-5 md:px-8 xl:px-10">
        <NuxtImg
          class="h-6 md:h-8"
          src="/img/usam.svg"
          alt="usam logo"
        />
        <NuxtImg
          class="h-6 md:h-8"
          src="/img/switzerland-member.svg"
          alt="switzerland member logo"
        />
        <NuxtImg
          class="h-6 md:h-8"
          src="/img/fsl.svg"
          alt="fsl logo"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
