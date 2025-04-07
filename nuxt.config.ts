// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/yaonkey.github.io/',
    buildAssetsDir: 'assets'
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/style.css'],
  postcss: {
    plugins: {
        tailwindcss: {},
        autoprefixer: {}
    }
  },
  modules: [
      "@nuxt/devtools",
      "@vueuse/nuxt",
      "@nuxt/content",
  ],
})