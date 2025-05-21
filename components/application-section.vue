<template>
  <div
    class="relative z-10 py-20 lg:pb-0 grid grid-cols-1 items-center lg:grid-cols-2 md:flex-row max-w-[1440px] mx-auto px-5 md:px-8 xl:px-10"
  >
    <NuxtImg
      class="transform translate-y-6 "
      src="/img/phone-mockup.png"
    />
    <div class="flex flex-col gap-10">
      <div class="flex flex-col gap-6">
        <h2 class="text-h2-mobile md:text-h2">
          Découvrez notre application
        </h2>
        <p>
          Notre application mobile vous accompagne pas à pas, sans jamais gâcher la surprise. Quelques jours avant
          la
          date choisie, elle vous glisse les premiers indices : météo, tenue conseillée, heure de départ…<br><br>

          Le jour J, elle devient votre boussole. Elle vous guide jusqu’à votre destination mystère, délivre les
          instructions au bon moment, et vous immerge dans l’expérience.
        </p>
      </div>
      <div class="flex flex-col md:flex-row gap-6">
        <button-component>
          Télécharger (IOS)
          <Icon
            class="ml-2"
            name="eb:external"
          />
        </button-component>
        <button-component>
          Télécharger (Android)
          <Icon
            class="ml-2"
            name="eb:external"
          />
        </button-component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
