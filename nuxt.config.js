import getRoutes from "./utils/getRoutes";

export default {
  mode: 'universal',
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: "apple-touch-icon", sizes:"180x180", href:"/favicon/apple-touch-icon.png" },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon-32x32.png' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css', type: 'text/css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400&family=Rajdhani:wght@500&display=swap', type: 'text/css'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css', type: 'text/css'},
      

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
    '@/assets/css/pile-of-bones.css',
    '@/assets/css/custom.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-moment'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/color-mode',
    ['@nuxtjs/google-analytics', {
      id: 'UA-174474647-2'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  */
  router: {
    trailingSlash: true
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  sitemap: {
    hostname: 'https://gregondata.com',
    trailingSlash: true,
    exclude: [
      '/admin/**'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 0.8,
      lastmod: new Date()
    },
    routes() {
      return getRoutes();
    },
    path: '/sitemap.xml',
    gzip: true,
    generate: true,
  },
  generate: {
    fallback: "404.html"
  },
}
