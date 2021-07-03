import i18n from './nuxt-i18n.config'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate:  '%s | Novalumo合同会社',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: 'Novalumo合同会社は、岩手県大船渡市にある「新世界創造会社」です。地域課題解決やメディア制作、イベント運営など幅広い事業を展開しています。' }
      // { property: 'og:title', content: '' },
      // { property: 'og:description', content: '' },
      // { property: 'twitter:title', content: '' },
      // { property: 'twitter:description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/fav.png' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css' },
    ],
  },
  
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/novalumo.scss',
  ],

  loading: {
    color: 'blue',
    failedColor: 'red',
    height: '5px'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    //'@nuxt/content',
    ['nuxt-i18n', i18n],
    '@nuxtjs/axios',
    '@nuxtjs/gtm'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  axios: {
    // proxy: true
  },

  gtm: {
    id: 'GTM-538NQQ9',
    debug: false,
    pageTracking: true,
  },
  
}
