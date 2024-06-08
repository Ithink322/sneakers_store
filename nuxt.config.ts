// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Sneakers store",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/blue_sneakers_icon.png",
        },
      ],
    },
  },
  css: ["~/assets/App.scss"],
/*   plugins: [{ src: "~/plugins/inputmask.js", ssr: true }], */
});
