import type { WebsiteConfig } from "~/types/WebsiteConfig";

//网站配置
export const websiteConfig:WebsiteConfig = {
    ui:{
        logo:'/img/logo.png',
        title:'魔法绘本工坊'
    },
    i18n:true,
    mode:{
        defaultMode:'light',
        enableSwitch:true
    },
    seo:{
        hreflangs:{
            host:'https://aimangatranslator.com'
        },
        metatitle:{
            key:'Metatitle'
        },
        Metadescription:{
            key:"Metadescription"
        },
        metakeywords:{
            key:"Metakeywords"
        },
    }
}