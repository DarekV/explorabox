<template>
  <div class="relative bg-white mt-10">
    <div
      class="absolute w-full h-full -top-6 bg-white [mask:url('/img/wave.svg')_repeat-x_top] [mask-size:auto_100%] pointer-events-none"
    />
    <div class="relative max-w-[1440px] pt-32 pb-28 mx-auto px-5 md:px-8 xl:px-10 flex flex-col gap-24">
      <h2 class="text-h2-mobile md:text-h2 text-center">
        Comment ça fonctionne?
      </h2>
      <div class="grid grids-1 sm:grid-cols-2 lg:grid-cols-4 text-center gap-10 md:gap-y-16">
        <functioning-card-component
          title="Choisissez vos dates"
          content="Réservez en ligne jusqu’à 10 journées dans l’année. Une seule suffit pour commencer !"
          image="date-icon.svg"
        />
        <functioning-card-component
          title="Sélectionnez une thématique"
          content="Aventure, détente, art et artisanat, sensations fortes, activités familiales ou découvertes urbaines : vous choisissez l’expérience que vous souhaitez vivre."
          image="balloon-icon.svg"
        />
        <functioning-card-component
          title="Personnalisez sans tout dévoiler"
          content="Vous pouvez indiquer vos préférences et vos restrictions (mobilité, allergies, peurs, etc.). Pas besoin d’en dire plus : l’effet de surprise reste intact."
          image="box-icon.svg"
        />
        <functioning-card-component
          title="Laissez-vous guider "
          content="Quelques jours avant l’activité, notre application vous révèle les premières informations. Le jour J, elle vous conduit vers votre destination mystère et vous accompagne tout au long de l’expérience."
          image="phone-icon.svg"
        />
      </div>
    </div>
    <marquee-component class="bg-secondary py-2">
      <p class="text-card-title-mobile md:text-card-title">
        Choisissez une thématique · Laissez-vous surprendre · Vivez l’inattendu · Recommencez
      </p>
      <div class="w-5 h-5 rounded-full bg-white mx-4" />
    </marquee-component>
  </div>
</template>

<script setup lang="ts">
</script>
