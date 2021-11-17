export default {
  target: 'static',

  head: {
    title: 'Instructor Integration',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Mock up of instructor integration for Fruit Fly Technologies\' pseudocode game'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      {
        rel: 'banner',
        type: 'image/png',
        href: '/icon.png'
      }
    ]
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxt/image',
    '@nuxtjs/moment'
  ],

  modules: [
    'nuxt-buefy',
    '@nuxtjs/pwa'
  ],

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  build: {},

  router: {
    base: process.env.BASE_URL || '/'
  }
}
