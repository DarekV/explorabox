import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    'nuxt-marquee',
    'nuxt-swiper',
  ],
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination',
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

  fonts: {
    defaults: {
      weights: [300, 400, 500, 700],
      styles: ['normal'],
    },
    families: [
      {
        name: 'Switzer',
        provider: 'local',
        global: true,
        src: [
          { src: '/fonts/switzer-light.woff2', weight: '300', style: 'normal' },
          { src: '/fonts/switzer-regular.woff2', weight: '400', style: 'normal' },
          { src: '/fonts/switzer-medium.woff2', weight: '500', style: 'normal' },
          { src: '/fonts/switzer-bold.woff2', weight: '700', style: 'normal' },
        ],
      },
    ],
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
    quality: 75,
  },
})
