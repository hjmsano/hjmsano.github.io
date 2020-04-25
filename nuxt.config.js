import pkg from './package'
export default {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: 'Hajime Sano on GitHub',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'keywords', content: 'GitHub, Portfolio, Hajime Sano'},
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
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [

    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
        '@nuxtjs/bulma',
        '@nuxtjs/font-awesome'
    ],

    /*
    ** Markdown-it
    */
    markdownit: {
        preset: 'default',
        injected: true,
        breaks: true,
        html: true,
        linkify: true,
        typography: true,
        xhtmlOut: true,
        langPrefix: 'language-',
        quotes: '“”‘’',
        highlight: function (/*str, lang*/) { return ''; },
    },

    /*
    ** Build configuration
    */
    build: {
        analyze: false,
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    },


    generate: {
        //routes: generateDynamicRoutes
    }
}
