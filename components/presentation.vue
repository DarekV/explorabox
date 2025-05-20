<template>
  <div
    class="max-w-[1440px] mt-10 mx-auto px-5 md:px-8 xl:px-10 grid grid-cols-12 gap-6 md:gap-8 lg:gap-10"
  >
    <NuxtImg
      src="/img/presentation.png"
      class="w-full rounded-[50px] lg:col-start-2 col-span-12 md:col-span-6 lg:col-span-5"
    />
    <div class="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col gap-6 ">
      <h2 class="text-h2-mobile md:text-h2">
        Laissez-vous guider par la surprise
      </h2>
      <p>
        Le principe est simple : vous vous inscrivez sur notre site, seul, en duo, en famille ou en groupe, vous
        indiquez votre lieu de départ, une thématique pour vos activités, puis c’est à nous de jouer !<br><br>
        Une application mobile vous guide tout au long de l’expérience. Vous y recevez des indices, les révélations
        progressives, les informations pratiques, pour que vous puissiez vivre pleinement l’aventure, sans rien prévoir
        à l’avance.
      </p>
      <div class="flex flex-row gap-6">
        <button-base color="primary">
          Réserver
        </button-base>
        <button-base color="secondary">
          Offrir
        </button-base>
      </div>
    </div>
  </div>
</template>
