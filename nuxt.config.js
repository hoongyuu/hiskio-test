const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/hiskio-test/',
        },
      }
    : {}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hiskio',
    htmlAttrs: {
      lang: 'zh-Hant',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'HiSKIO 提供專業的線上教學，讓學習專業技能更快速簡單。最專業、最正確、最實用的優選師資。',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        crossorigin: true,
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        crossorigin: true,
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/proxy'],

  axios: {
    proxy: true,
    credentials: true,
    baseURL: process.env.API_BASE_URL,
  },

  ...routerBase,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    API_BASE_URL: 'https://api.hiskio.com/v2',
  },
}
