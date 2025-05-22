<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-start gap-10">
      <reservation-progresss-component :selected="1" />
      <div class="w-full lg:mt-[130px] pb-40">
        <reservation-type-section v-if="selected === 1" />
        <reservation-peaple-component v-if="selected === 2" />
        <reservation-personnalisation-component v-if="selected === 3" />
        <reservation-validation-component v-if="selected === 4" />
        <div class="flex justify-end mt-10 px-5 md:px-8 gap-6">
          <button-component @click="selected--">
            Retour
          </button-component>
          <button-component @click="selected++">
            Suivant
          </button-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const selected = ref(1)
</script>
