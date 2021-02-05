export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Novalumo合同会社 | A New World Creation Company',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Novalumo合同会社は、岩手県大船渡市にある「新世界創造会社」です。地域課題解決やメディア制作、イベント運営など幅広い事業を展開しています。' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/fav.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      //{ rel: 'stylesheet', href: '/css/normalize.min.css' },
      { rel: 'stylesheet', href: '/css/bootstrap-grid.min.css' },
      { rel: 'stylesheet', href: '/css/bs.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    'nuxt-i18n',
    /*
    {
      locales: [
        {
           code: 'es',
           iso: 'en-ES',
           name: 'Español',
         },
         {
           code: 'en',
           iso: 'en-US',
           name: 'English',
         },
         {
           code: 'fr',
           iso: 'fr-fr',
           name: 'Français',
         },
      ],
      defaultLocale: 'en',
      noPrefixDefaultLocale: true,
    }
    */
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
