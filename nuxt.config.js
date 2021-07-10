import i18n from './nuxt-i18n.config'

const url = 'https://www.novalumo.llc'
const site_name   = 'Novalumo合同会社 | A New World Creation Company'
const description = 'Novalumo合同会社は、岩手県大船渡市にある「新世界創造会社」です。地域課題解決やメディア制作、イベント運営など幅広い事業を展開しています。'

export default {
  target: 'static',
  head:
  {
    titleTemplate: '%s | Novalumo合同会社',
    meta:
    [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: description },
      // open graph
      { property: 'og:type', content: 'article' },
      { property: 'og:site_name', content: site_name },
      { property: 'og:description', content: description },
      { property: 'og:image', content: '/img/novalumo.jpg' },
      // twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:creator', content: '@novalumo' },
      { property: 'twitter:description', content: description },
    ],
    link:
    [
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/icon.png' },
      { rel: 'manifest', href: '/manifest.webmanifest' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css' },
    ],
  },
  router:
  {
    scrollBehavior: function (to, from, savedPosition)
    {
      return { x: 0, y: 0 }
    }
  },
  css:
  [
    '~/assets/novalumo.scss',
  ],
  loading:
  {
    color: 'blue',
    failedColor: 'red',
    height: '5px'
  },
  plugins:
  [
    '@/plugins/utils'
  ],
  components: true,
  buildModules:
  [
    '@nuxt/typescript-build',
    '@nuxt/image'
  ],
  modules:
  [
    //'@nuxt/content',
    ['nuxt-i18n', i18n],
    '@nuxtjs/axios',
    '@nuxtjs/gtm'
  ],
  build:
  {
  },
  axios:
  {
  },
  gtm:
  {
    id: 'GTM-538NQQ9',
    debug: false,
    pageTracking: true,
  },
}
