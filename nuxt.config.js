// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt3-meta-pixel',
    'nuxt-gtag',
  ],
  css: ['@/styles/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  swiper: {

  },
  plugins: [
    { src: '~/plugins/fontawesome', ssr: false },
    { src: '~/plugins/tiktok.client.js'}
  ],
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '7260785620672399',
    autoPageView: true,
    disabled: false
  },

  gtag: {
    id: 'G-Y8MW8V3RSR', // Replace with your actual Google Analytics Measurement ID
  },
})
