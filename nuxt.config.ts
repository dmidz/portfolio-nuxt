// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: [
    [ '@nuxt/image', {
      presets: {
        workThumb: {
          modifiers: {
            // format: 'png',
            width: 278,
            height: 110,
          }
        }
      },
    }],
    ['@nuxtjs/google-fonts', {
      families: {
        'Rajdhani': { 
          wght: [ 400 ],
        },
        // Offside: true,
        // Croissant+One: true,
        // Federant: true,
        // Smooch+Sans: true,
        // Marvel: true,
        // Wire+One: true,
        // Alumni Sans Pinstripe: true,
        // Roboto: true,
        // 'Josefin+Sans': true,
        // Lato: [ 100, 300 ],
        // Raleway: {
        //   wght: [ 100, 400 ],
        //   ital: [ 100 ]
        // },
      }
    }]
  ],
  css: [
    '~/assets/css/themes/vela-green.scss'
  ],
  build: {
    transpile: [ 'primevue' ]
  },
});
