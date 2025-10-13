import {websiteConfig} from '~/config/website'

export const useHrefLangs = () => {
  const route = useRoute()
  const { t, locales } = useI18n()
  
  const generateHrefLangs = () => {
    const links = []
    const canonicalUrl = `${websiteConfig.seo.hreflangs?.host}${route.path}`
    
    locales.value.forEach((locale) => {
      if (locale.code === "en") {
        links.push({
          hid: "alternate-x-default",
          rel: "alternate",
          hreflang: "x-default",
          href: `${websiteConfig.seo.hreflangs?.host}/`,
        })
      } else {
        links.push({
          hid: "alternate-" + locale.code,
          rel: "alternate",
          hreflang: locale.iso,
          href: `${websiteConfig.seo.hreflangs?.host}/${locale.code}/`,
        })
      }
    })

    links.push({ rel: "canonical", href: canonicalUrl })
    return {
      link: links,
      // title: t("Metatitle"),
      // meta: [
      //   {
      //     hid: "description",
      //     name: "description",
      //     content: t("Metadescription"),
      //   },
      //   { 
      //     hid: "keywords", 
      //     name: "keywords", 
      //     content: t("Metakeywords") 
      //   },
      // ],
    }
  }

  return { generateHrefLangs }
}