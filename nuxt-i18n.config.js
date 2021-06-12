export default {
  baseUrl: 'https://www.novalumo.llc',
  seo: true,
  locales: [
    // 日本語
    {
      code: 'ja',
      iso: 'ja',
      file: 'ja.json',
      name: '日本語'
    },
    // English
    {
      code: 'en',
      iso: 'en',
      file: 'en.json',
      name: 'English'
    },
    // Esperanto
    {
      code: 'eo',
      iso: 'eo',
      file: 'eo.json',
      name: 'Esperanto'
    },
    // Deutsch
    // {
    //   code: 'de',
    //   iso: 'de',
    //   file: 'de.json',
    //   name: 'Deutsch'
    // },
    // // Français
    // {
    //   code: 'fr',
    //   iso: 'fr',
    //   file: 'fr.json',
    //   name: 'Français'
    // }
    // Español
    // {
    //   code: 'es',
    //   iso: 'es',
    //   file: 'es.json',
    //   name: 'Español'
    // },
    // Italiana
    // {
    //   code: 'it',
    //   iso: 'it',
    //   file: 'it.json',
    //   name: 'Italiana'
    // },
    // Bokmål
    // {
    //   code: 'nb',
    //   iso: 'nb',
    //   file: 'nb.json',
    //   name: 'Bokmål'
    // },
  ],
  defaultLocale: 'ja',
  fallbackLocale: 'ja',
  lazy: true,
  langDir: 'locales/',
}