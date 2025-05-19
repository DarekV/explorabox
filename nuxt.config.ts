import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
  ],
  ssr: false,
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/variables.css',
  ],
  compatibilityDate: '2025-05-15',

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})