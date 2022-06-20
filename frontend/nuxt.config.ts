import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  srcDir: 'src/',
  buildModules: [
  ],
  typescript: {
    strict: true,
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
});
