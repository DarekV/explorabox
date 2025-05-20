import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    'nuxt-marquee',
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

  icon: {
    customCollections: [
      {
        prefix: 'eb',
        dir: './assets/icons',
      },
    ],
  },

  image: {
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
})
