export default {
  locales: [
    // English
    {
      code: 'en',
      iso: 'en',
      file: 'en.json'
    },
    // 日本語
    {
      code: 'jp',
      iso: 'ja',
      file: 'ja.json'
    },
    // Esperanto
    {
      code: 'eo',
      iso: 'eo',
      file: 'eo.json'
    },
    // Español
    {
      code: 'es',
      iso: 'es',
      file: 'es.json'
    },
    // Deutsch
    {
      code: 'de',
      iso: 'de',
      file: 'de.json'
    },
    // Français
    {
      code: 'fr',
      iso: 'fr',
      file: 'fr.json'
    }
  ],
  defaultLocale: 'en',
  fallbackLocale: 'en',
  lazy: true,
  langDir: 'locales/',
  detectBrowserLanguage: { alwaysRedirect: true },
}