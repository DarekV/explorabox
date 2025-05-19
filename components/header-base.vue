<template>
  <div class="sticky max-w-[1440px] mx-auto px-5 md:px-8 lx:px-10">
    <div class="flex py-8 justify-between items-center">
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
      <ul
        :class="['flex gap-6 duration-500 items-center justify-center', { 'hidden': !isMenuOpen, 'flex-col absolute top-full left-0 w-full bg-white': isMenuOpen, 'md:flex md:static md:flex-row md:w-auto md:bg-transparent': true }]"
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
          <button-base color="secondary">
            Réserver
          </button-base>
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
  </div>
</template>

<script setup lang="ts">
import ButtonBase from '~/components/button-base.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
