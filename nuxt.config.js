const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    'aos/dist/aos.css',
    'mavon-editor/dist/css/index.css',
    'highlight.js/styles/default.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '@/plugins/antd-ui', ssr: true},
    {src: '@/plugins/lodash', ssr: false},
    {src: '@/plugins/aos', ssr: false},
    {src: '@/plugins/height', ssr: false},
    {src: '@/plugins/scroll-top', ssr: false},
    {src: '@/plugins/iconfont', ssr: false},
    {src: '@/plugins/mavon-edit', ssr: false},
    {src: '@/plugins/marked', ssr: true}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
