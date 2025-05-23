<template>
  <div class="px-5 md:px-8">
    <p class="mb-6 text-featured-mobile md:text-featured">
      Résumé et valisation
    </p>
    <div class="flex flex-col">
      <div class="flex flex-col mb-10">
        <div class="w-full h-[1px] rounded-full bg-background-dark" />
        <p class="mt-10 mb-6 font-bold">
          Fomule
        </p>
        <reservation-validation-content-component
          name="Thématique"
          content="Sensations fortes"
        />
        <reservation-validation-content-component
          name="Première date"
          content="25.9.2025"
        />
        <reservation-validation-content-component
          name="Lieu de départ"
          content="Fribourg"
        />
        <reservation-validation-content-component
          name="Moyen de transport"
          content="Voiture"
        />
      </div>
      <div class="flex flex-col mb-10">
        <div class="w-full h-[1px] rounded-full bg-background-dark" />
        <p class="mt-10 mb-6 font-bold">
          Participant
        </p>
        <reservation-validation-content-component
          name="Nom et prénom"
          content="Maxime Verloren"
        />
        <reservation-validation-content-component
          name="Date de naissance"
          content="17.1.1995"
        />
        <reservation-validation-content-component
          name="Email"
          content="Max@gmail.com"
        />
        <reservation-validation-content-component
          name="Adresse"
          content="1700 Fribourg Route du belvédère 10"
        />
        <reservation-validation-content-component
          name="Abonnement de transport"
          content="Sans abonnement"
        />
      </div>
      <div class="flex flex-col">
        <div class="w-full h-[1px] rounded-full bg-background-dark" />
        <p class="mt-10 font-bold">
          Prix
        </p>
        <reservation-validation-content-component
          name="Prix par personne"
          content="1300 chf"
        />
        <reservation-validation-content-component
          name="Prix total"
          content="1300 chf"
        />

        <div class="mt-10 flex flex-col gap-2">
          <div class="flex flex-row items-center gap-2">
            <input
              type="checkbox"
            >
            <p>Je confirme que mes informations sont exactes</p>
          </div>
          <div class="flex flex-row items-center gap-2">
            <input
              type="checkbox"
            >
            <p>J’accepte les <a class="underline font-bold">condition d’utilisation</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ReservationValidationContentComponent from '~/components/reservation-validation-content-component.vue'
</script>
