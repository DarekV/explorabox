<template>
  <div class="px-5 md:px-8">
    <p class="mb-6 text-featured-mobile md:text-featured">
      Résumé et valisation
    </p>
    <div class="flex flex-col">
      <div class="flex flex-col mb-10">
        <div class="w-full h-[1px] rounded-full bg-background-dark" />
        <p class="mt-10 font-bold">
          Fomule
        </p>
        <div class="mt-6 grid md:grid-cols-4">
          <div class="col-span-1 flex flex-col gap-4">
            <p>Thématique choisie :</p>
            <p>Thématique choisie :</p>
            <p>Thématique choisie :</p>
            <p>Thématique choisie :</p>
          </div>
          <div class="col-span-3 flex flex-col gap-4">
            <p>Sensations fortes</p>
            <p>Sensations fortes</p>
            <p>Sensations fortes</p>
            <p>Sensations fortes</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col mb-10">
        <div class="w-full h-[1px] rounded-full bg-background-dark" />
        <p class="mt-10 font-bold">
          Participants
        </p>
        <div class="mt-6 grid md:grid-cols-4">
          <div class="col-span-1 flex flex-col gap-4">
            <p>Nom, et prénom :</p>
            <p>Thématique choisie :</p>
            <p>Thématique choisie :</p>
            <p>Thématique choisie :</p>
            <p>Thématique choisie :</p>
          </div>
          <div class="col-span-3 flex flex-col gap-4">
            <p>Sensations fortes</p>
            <p>Sensations fortes</p>
            <p>Sensations fortes</p>
            <p>Sensations fortes</p>
            <p>Sensations fortes</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="w-full h-[1px] rounded-full bg-background-dark" />
        <p class="mt-10 font-bold">
          Prix
        </p>
        <div class="mt-6 grid md:grid-cols-4">
          <div class="col-span-1 flex flex-col gap-4">
            <p>prix par personne :</p>
            <p>prix total :</p>
          </div>
          <div class="col-span-3 flex flex-col gap-4">
            <p>1300 chf</p>
            <p>1300chf</p>
          </div>
        </div>
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
</script>
