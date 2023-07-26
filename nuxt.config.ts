// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Rajdhani': { 
          wght: [ 300 ],
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
});
