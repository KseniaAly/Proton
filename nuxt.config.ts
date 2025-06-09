// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      htmlAttrs: {
        lang: 'RU-ru',
      },
    }
  },
  css: [
    '~/assets/scss/style.scss'
  ],
  devtools: { enabled: false },
  ssr: false
})
