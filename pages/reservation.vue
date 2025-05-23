<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-start gap-10">
      <reservation-progresss-component :selected="selected" />
      <div class="w-full lg:mt-[130px] pb-40">
        <reservation-type-section v-if="selected === 1" />
        <reservation-peaple-component v-if="selected === 2" />
        <reservation-personnalisation-component v-if="selected === 3" />
        <reservation-validation-component v-if="selected === 4" />
        <div class="flex justify-end mt-10 px-5 md:px-8 gap-6">
          <button-component
            v-if="selected >=2"
            @click="previous"
          >
            Retour
          </button-component>
          <button-component
            v-if="selected <=3"
            @click="next"
          >
            Suivant
          </button-component>
          <NuxtLink to="/payment">
            <button-component
              v-if="selected === 4"
              @click="next"
            >
              Passer au payement
            </button-component>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const selected = ref(1)

function previous() {
  selected.value--
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function next() {
  selected.value++
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
