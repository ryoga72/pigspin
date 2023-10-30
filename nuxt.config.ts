// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  ssr: true,
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://wordpress-704245-3836348.cloudwaysapps.com/wp-includes/blocks/navigation/style.min.css?ver=6.3.1",
        },
        {
          rel: "stylesheet",
          href: "https://wordpress-704245-3836348.cloudwaysapps.com/wp-includes/blocks/gallery/style.min.css?ver=6.3.1",
        },
        {
          rel: "stylesheet",
          href: "https://wordpress-704245-3836348.cloudwaysapps.com/wp-includes/css/dashicons.min.css?ver=6.3.1",
        },
        {
          rel: "stylesheet",
          href: "https://wordpress-704245-3836348.cloudwaysapps.com/wp-includes/css/admin-bar.min.css?ver=6.3.1",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/daisyui@3.6.3/dist/full.css",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@hypernym/nuxt-gsap",
    "@nuxtjs/device",
  ],
  image: {
    dir: "assets/",
  },
  css: ["~/assets/main.css"],
});
