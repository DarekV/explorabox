<template>
  <div class="px-5 md:px-8">
    <p class="mb-6 text-featured-mobile md:text-featured">
      Inscription des participants
    </p>
    <div class="w-full h-[1px] rounded-full bg-background-dark" />
    <div class="flex flex-col mt-10 gap-10">
      <div class="flex flex-col gap-6">
        <p>Choisissez le nombre de participants</p>
      </div>
      <div class="flex flex-row gap-10">
        <div>
          <p>Adultes</p>
          <div class="flex items-center gap-3">
            <button-component
              :color="adultButtonColor"
              @click="removeAdult"
            >
              -
            </button-component>
            <p>{{ adultNumber }}</p>
            <button-component @click="addAdult">
              +
            </button-component>
          </div>
        </div>
        <div>
          <p>Enfants (-16 ans)</p>
          <div class="flex items-center gap-3">
            <button-component
              :color="kidsButtonColor"
              @click="removeKid"
            >
              -
            </button-component>
            <p>{{ kidsNumber }}</p>
            <button-component @click="addKid">
              +
            </button-component>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <div
          v-for="index in participants.length"
          :key="index"
          class="flex flex-col gap-6 pt-6"
        >
          <div class="w-full h-[1px] rounded-full bg-background-dark" />
          <p>Participants {{ index }}</p>
          <div class="flex md:flex-row flex-col gap-10">
            <input-component
              title="Nom"
              placeholder="Vassalli"
              class="md:max-w-[350px]"
            />
            <input-component
              title="Prénom"
              placeholder="Darek"
              class="md:max-w-[350px]"
            />
          </div>
          <input-component
            type="date"
            class="md:max-w-[350px]"
          />
          <input-component
            title="Email"
            placeholder="date de naissance"
            class="md:max-w-[350px]"
          />
          <div class="flex md:flex-row flex-col gap-10">
            <input-component
              title="Ville"
              placeholder="Fribourg"
              class="md:max-w-[350px]"
            />
            <input-component
              title="Code postal"
              placeholder="1700"
              class="md:max-w-[350px]"
            />
          </div>
          <input-component
            title="Adresse"
            placeholder="Chemin des rues 22"
            class="md:max-w-[350px]"
          />
          <input-component
            type="select"
            title="Abonnement de transport"
            placeholder="abonnement général"
            class="md:max-w-[350px]"
          >
            <option
              disabled
              value=""
            >
              Abonnement de transport
            </option>
            <option>Abonnement général</option>
            <option>Demi tarif</option>
            <option>Sans abonnement</option>
          </input-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const adultNumber = ref(1)
const kidsNumber = ref(0)
const participants = ref<string[]>(['1'])

const adultButtonColor = ref('background')
const kidsButtonColor = ref('background')

function addAdult() {
  adultNumber.value++
  participants.value.push('')
}

function addKid() {
  kidsNumber.value++
  participants.value.push('')
}

function removeAdult() {
  if (adultNumber.value > 0) {
    adultNumber.value--
    participants.value.pop()
  }
}

function removeKid() {
  if (kidsNumber.value > 0) {
    kidsNumber.value--
    participants.value.pop()
  }
}

watch(adultNumber, (val) => {
  adultButtonColor.value = val === 0 ? 'background' : 'primary'
})

watch(kidsNumber, (val) => {
  kidsButtonColor.value = val === 0 ? 'background' : 'primary'
})
</script>
