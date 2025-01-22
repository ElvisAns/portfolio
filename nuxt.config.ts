// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/seo'],
  css: ['@fortawesome/fontawesome-free/css/all.css'],
  colorMode: {
    preference: 'dark'
  },
  site: {
    url: 'https://ansima.dev',
    name: 'Ansima Portfolio Site',
  }
})