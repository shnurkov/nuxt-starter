
import localeRU from './assets/locales/ru.json';
import localeEN from './assets/locales/en.json';

module.exports = {
  head: {
    title: 'decimal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  loading: { color: '#3B8070' },
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  styleResources: {
    scss: [
      '~assets/scss/vars.scss',
      '~assets/scss/mixins.scss',
    ],
  },
  css: [
    '~assets/scss/global.scss',
    '~assets/scss/vars.scss',
  ],
  modules: ['@nuxtjs/style-resources', 'nuxt-i18n'],
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    strategy: 'no_prefix',
    vueI18n: {
      messages: {
        ru: localeRU,
        en: localeEN,
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'ru',
    },
  },
};
