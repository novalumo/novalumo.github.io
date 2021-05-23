export default {
  locales: [
    // English
    {
      code: 'en',
      iso: 'en',
      file: 'en.json',
      name: 'English'
    },
    // 日本語
    {
      code: 'jp',
      iso: 'ja',
      file: 'ja.json',
      name: '日本語'
    },
    /*
    // Esperanto
    {
      code: 'eo',
      iso: 'eo',
      file: 'eo.json',
      name: 'Esperanto'
    },
    // Español
    {
      code: 'es',
      iso: 'es',
      file: 'es.json',
      name: 'Español'
    },
    // Deutsch
    {
      code: 'de',
      iso: 'de',
      file: 'de.json',
      name: 'Deutsch'
    },
    // Français
    {
      code: 'fr',
      iso: 'fr',
      file: 'fr.json',
      name: 'Français'
    }
    */
  ],
  defaultLocale: 'en',
  fallbackLocale: 'en',
  lazy: true,
  langDir: 'locales/',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected'
  },
}