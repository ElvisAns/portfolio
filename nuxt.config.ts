// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/seo',
    // nuxt-og-image 4 still aliases disabled bindings to unenv/runtime/mock/empty.
    // unenv 2's export map resolves that to dist/runtime/runtime/mock/empty.mjs, which is not a file.
    (_options, nuxt) => {
      nuxt.hook('nitro:config', (nitroConfig) => {
        const alias = nitroConfig.alias
        if (!alias) return
        for (const key of Object.keys(alias)) {
          if (alias[key] === 'unenv/runtime/mock/empty') {
            alias[key] = 'unenv/mock/empty'
          }
        }
      })
    },
    '@nuxtjs/color-mode'
  ],
  css: ['@fortawesome/fontawesome-free/css/all.css'],
  colorMode: {
    preference: 'dark'
  },
  site: {
    url: 'https://ansima.dev',
    name: 'Ansima Portfolio Site',
  }
})