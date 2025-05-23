<template>
  <header class="fixed top-0 w-full z-50 shadow-[0_4px_10px_0px_rgba(0,0,0,0.1)] bg-white">
    <div
      class="relative z-[999] bg-white flex py-4 justify-between items-center max-w-[1440px] mx-auto px-5 md:px-8 xl:px-10"
    >
      <NuxtLink to="/">
        <h1 class="text-4xl md:text-[2.5rem] font-bold">
          ExploraBox
        </h1>
      </NuxtLink>
      <button
        class="md:hidden flex flex-col justify-around h-8 w-8 p-1 rounded hover:bg-gray-400"
        @click="toggleMenu"
      >
        <span class="h-0.5 rounded bg-black w-full" />
        <span class="h-0.5 rounded bg-black w-full" />
        <span class="h-0.5 rounded bg-black w-full" />
      </button>
      <ul class="hidden md:flex gap-6 items-center justify-center">
        <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/team">L'équipe</NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/#faq"
            class="flex items-center"
          >FAQ
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/#application"
            class="flex items-center"
          >Télécharger
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/reservation">
            <button-component color="secondary">
              Réserver
            </button-component>
          </NuxtLink>
        </li>
        <li
          class="relative flex flex-col gap-1 overflow-hidden hover:cursor-pointer"
          @click="isOpen === false ? isOpen = true : isOpen = false"
        >
          <div class="flex gap-2 items-center justify-center">
            <p>fr</p>
            <Icon
              class="transition-transform duration-300 transform ease-in-out"
              :class="{ 'rotate-180': isOpen }"
              name="eb:chevron"
              size="0.5rem"
            />
          </div>
          <div
            class="duration-300 transform ease-in-out"
            :class="{ 'max-h-0': !isOpen, 'max-h-20': isOpen }"
          >
            <p>En</p>
            <p>De</p>
          </div>
        </li>
      </ul>
    </div>
    <ul
      class="flex flex-col gap-4 absolute top-full left-0 w-full bg-white px-5 py-4 transition-transform duration-300 transform ease-in-out md:hidden"
      :class="{
        'translate-y-0 pointer-events-auto': isMenuOpen,
        '-translate-y-[150%] pointer-events-none': !isMenuOpen,
      }"
    >
      <li>
        <NuxtLink
          to="/contact"
          @click="toggleMenu"
        >Contact
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/team"
          @click="toggleMenu"
        >L'équipe
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/#faq"
          class="flex items-center"
        >FAQ
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/#application"
          class="flex items-center"
        >Télécharger
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/reservation">
          <button-component color="secondary">
            Réserver
          </button-component>
        </NuxtLink>
      </li>
      <li
        class="relative flex flex-col gap-1 overflow-hidden hover:cursor-pointer"
        @click="isOpen === false ? isOpen = true : isOpen = false"
      >
        <div class="flex gap-2 items-center justify-center">
          <p>fr</p>
          <Icon
            class="transition-transform duration-300 transform ease-in-out"
            :class="{ 'rotate-180': isOpen }"
            name="eb:chevron"
            size="0.5rem"
          />
        </div>
        <div
          class="flex flex-col items-center duration-300 transform ease-in-out"
          :class="{ 'max-h-0': !isOpen, 'max-h-20': isOpen }"
        >
          <p>En</p>
          <p>De</p>
        </div>
      </li>
    </ul>
  </header>
  <marquee-component />
</template>

<script setup lang="ts">
import ButtonComponent from '~/components/button-component.vue'

const isMenuOpen = ref(false)
const isOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
