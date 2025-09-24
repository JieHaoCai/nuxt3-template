// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      title: '这是一个nuxt的模板',
      htmlAttrs:{
        lang:"en"
      },
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=G-XTYK63PBHK`,
          async: true,
        },
        {
          id: "analytics-script",
          src: "https://analytics.aimangatranslator.com/script.js",
          defer: true,
          "data-website-id": "a10e9d0c-dc12-41b3-bb6e-e77bafd4ad5f",
        },
      ],
    meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          id: "description",
          name: "description",
          content:
            "Easy2Resume is a professional resume builder that offers multilingual support, including English, Chinese, and Japanese, along with a variety of professional templates. Its user-friendly interface simplifies the resume creation process, enhancing success rates with optimization tips. While it focuses primarily on resume creation and may lack personalized design options, it has helped over 3000 candidates improve their resumes, increasing success rates by 90%.",
        },
        {
          id: "keywords",
          name: "keywords",
          content:
            "resume builder, professional resume, multilingual resume, resume templates, user-friendly interface, resume optimization, resume success, HR attention",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "baidu-site-verification", content: "codeva-Vk5ocrYUnk" },
      ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      // { rel: 'canonical', href: 'https://aimangatranslator.com/' },
      // { rel: 'preload', href: '/img/bg_img_1.png',  as:"image"},
     ],
    }
  },
  css:[  "~/assets/css/mide.scss",
    "~/assets/css/reset.css",
    "~/assets/font/iconfont.css",
    "~/assets/css/templateReset.css",],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', "@nuxtjs/sitemap"],
  vite:{
    server:{
      proxy:{
        '/api':{
          target: 'https://easy2resume.com/api', //目标服务器地址
          changeOrigin: true,
          rewrite:(path)=>path.replace(/^\/api/, '')
        }
      }
    }
  }
})