<template>
  <header class="sticky z-50 shadow-[0_4px_10px_0px_rgba(0,0,0,0.1)] bg-white">
    <div class="flex py-8 justify-between items-center max-w-[1440px] mx-auto px-5 md:px-8 xl:px-10">
      <h1 class="text-4xl md:text-[2.5rem] font-bold">
        ExploraBox
      </h1>
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
          <NuxtLink to="/">Contact</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">L'équipe</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">Télécharger l'app</NuxtLink>
        </li>
        <li>
          <button-component color="secondary">
            Réserver
          </button-component>
        </li>
        <li>
          <div class="flex gap-2 items-center justify-center">
            <p>fr</p>
            <Icon
              name="eb:chevron"
              size="0.5rem"
            />
          </div>
        </li>
      </ul>
    </div>
    <ul
      class="flex flex-col gap-4 absolute top-full left-0 w-full bg-white px-5 py-4 transition-transform transition-opacity duration-300 transform ease-in-out md:hidden"
      :class="{
        'translate-y-0 pointer-events-auto': isMenuOpen,
        '-translate-y-[150%] pointer-events-none': !isMenuOpen,
      }"
    >
      <li>
        <NuxtLink to="/">Contact</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">L'équipe</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">Télécharger l'app</NuxtLink>
      </li>
      <li>
        <button-component color="secondary">
          Réserver
        </button-component>
      </li>
      <li>
        <div class="flex gap-2 items-center justify-center">
          <p>fr</p>
          <Icon
            name="eb:chevron"
            size="0.5rem"
          />
        </div>
      </li>
    </ul>
  </header>
  <marquee-component />
</template>

<script setup lang="ts">
import ButtonComponent from '~/components/button-component.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
