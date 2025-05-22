<template>
  <div class="px-5 md:px-8">
    <p class="mb-6 text-featured-mobile md:text-featured">
      Sélection de la formule
    </p>
    <div class="w-full h-[1px] rounded-full bg-background-dark" />
    <div class="flex flex-col mt-10 gap-10">
      <div class="flex flex-col gap-6">
        <input-component
          class="md:max-w-[350px]"
          title="Entrez votre adresse Email"
          placeholder="Example@mail.com"
        />
        <div class="flex flex-row items-center gap-2">
          <input
            type="checkbox"
          >
          <p>Acheter pour offir</p>
        </div>
      </div>
      <div>
        <p>
          Choisissez votre type d'activité
        </p>
        <div class="mt-2 flex flex-row flex-wrap gap-4">
          <p
            v-for="tag in tags"
            :key="tag"
            :class="[
              'px-6 py-4 rounded-[12px] cursor-pointer transition',
              selectedTag === tag ? 'bg-primary text-black' : 'bg-background text-background-dark',
            ]"
            @click="selectTag(tag)"
          >
            {{ tag }}
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <input-component class="md:max-w-[350px]" />
        <input-component
          title="Choisissez votre lieu de départ."
          placeholder="Fribourg"
          class="md:max-w-[350px]"
        />
        <input-component
          type="date"
          class="md:max-w-[350px]"
        />
        <input-component class="md:max-w-[350px]" />
        <input-component
          type="select"
          title="Moyen de transport"
          class="md:max-w-[350px]"
        >
          <option
            disabled
            value=""
          >
            Moyen de transport
          </option>
          <option>Transport publiques</option>
          <option>Voiture</option>
        </input-component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tags = [
  'Sensations fortes',
  'Aventures urbaines',
  'Moments en famille',
  'Trésors d\'artisanat',
  'Escapade bien-être',
]

const selectedTag = ref<string | null>(null)

function selectTag(tag: string) {
  selectedTag.value = tag
}
</script>
