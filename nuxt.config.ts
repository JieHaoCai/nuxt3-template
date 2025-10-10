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
          id: "gtag-init",
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_user_data:'denied',
              ad_personalization:'denied',
              ad_storage: 'denied',
            });
            gtag('js', new Date());
            gtag('config', 'G-8Q9Y0FPDY8');
          `,
          type: "text/javascript",
        },
        {
          id: "analytics-script",
          src: "https://analytics.aimangatranslator.com/script.js",
          defer: true,
          "data-website-id": "a10e9d0c-dc12-41b3-bb6e-e77bafd4ad5f",
        },
      ],
      noscript:[
        {
         innerHTML: `<iframe src="https://www.googletagmanager.com/gtag/js?id=G-8Q9Y0FPDY8" height="0" width="0" style="display:none;visibility:hidden;position:absolute;top:-9999px;left:-9999px;" scrolling="no"></iframe>`,
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
        { rel: "preload", href: "/img/bg_img_1.png", as: "image" },
        // { rel: 'canonical', href: 'https://aimangatranslator.com/' },
        // { rel: 'preload', href: '/img/bg_img_1.png',  as:"image"},
      ],
    }
  },
  css:[  
    "~/assets/css/mide.scss",
    "~/assets/css/reset.css",
    "~/assets/font/iconfont.css",
    "~/assets/css/templateReset.css",
    "~/assets/css/variable.scss"
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', "@nuxtjs/sitemap", "@nuxtjs/i18n","@element-plus/nuxt"],
  //国际化相关配置
  i18n: {
    defaultLocale: "en",
    locales: [
      {
        key: "en",
        code: "en",
        iso: "en-US",
        name: "English"
      },
      {
        key: "zh-CN",
        code: "zh-CN",
        iso: "zh-CN",
        name: "简体中文"
      },
      {
        key: "ar",
        code: "ar",
        iso: "ar",
        name: "العربية",
      },
      {
        key: "de",
        code: "de",
        iso: "de",
        name: "Deutsch",
      },
      {
        key: "fr",
        code: "fr",
        iso: "fr",
        name: "Français",
      },
      {
        key: "ja",
        code: "ja",
        iso: "ja",
        name: "日本語",
      },
      {
        key: "es",
        code: "es",
        iso: "es",
        name: "español",
      },
      {
        key: "it",
        code: "it",
        iso: "it",
        name: "Italiano",
      },
      {
        key: "tr",
        code: "tr",
        iso: "tr",
        name: "Türkçe",
      },
      {
        key: "vi",
        code: "vi",
        iso: "vi",
        name: "Tiếng Việt",
      },
      {
        key: "ko",
        code: "ko",
        iso: "ko",
        name: "한국인",
      },
    ],
     vueI18n:"./i18n.config.ts",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
    }
  },
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