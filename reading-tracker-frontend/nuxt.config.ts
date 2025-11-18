// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/devtools'],
  
  // Vuetify configuration
  css: ['vuetify/styles'],
  
  build: {
    transpile: ['vuetify'],
  },
})