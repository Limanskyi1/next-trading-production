export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  modules: ['@nuxtjs/i18n', '@nuxt/fonts','@hypernym/nuxt-gsap'],

  gsap:{
    composables: true,
    provide:false,
    extraPlugins : {
      scrollTrigger: true
    }
  },

  i18n: {
    locales: [
      { code: 'en', name: 'EN' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
  },

  fonts: {
    families: [
      {
        name: 'Kanit',
        provider: "google",
      },
      {
        name: 'Montserrat',
        provider: 'google',
      },
    ],
  },


  css: [
    '~/assets/styles/main.scss',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/assets/styles/_global-imports.scss";`,
        },
      },
    },
  },
});