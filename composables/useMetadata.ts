import { websiteConfig } from '~/config/website'
export const useMetaData = () =>{
    const { t } = useI18n()

    const setMetaTitle = ()=>{
        useHead({
            title: t(websiteConfig.seo.metatitle!.key)
        })
    }

    const setMeTaDescWithKey = ()=>{
         useHead({
         meta: [
            {
            id: "description",
            name: "description",
            content: t(websiteConfig.seo.Metadescription!.key),
            },
            { 
            id: "keywords", 
            name: "keywords", 
            content: t(websiteConfig.seo.metakeywords!.key) 
            },
          ],
        })
    }
    return { setMetaTitle ,setMeTaDescWithKey}
}