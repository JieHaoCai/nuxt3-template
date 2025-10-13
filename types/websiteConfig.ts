/**
 * 网站配置接口
 * @interface WebsiteConfig
 */
export interface WebsiteConfig{
    /**
     * UI 配置
     */
    ui:{
        /** 网站 logo 路径 */
        logo:string,
        /** 网站标题 */
        title:string
    },
    /** 是否启用国际化，i18n 的配置在项目根目录中的 i18n 文件夹去进行配置 */
    i18n:boolean
    /**
     * 暗色模式配置
     */
    mode:{
       /** 默认模式：dark(暗色) 或 light(亮色) */
       defaultMode:'dark'|'light',
       /** 是否启用模式切换按钮 */
       enableSwitch:boolean
    },
    /**
     * SEO 配置
     */
    seo:{
        /**
         * Hreflangs 配置，如果开启国际化，建议开启
         */
        hreflangs?:{
            /** 网站域名 */
            host:string
        },
        /**
         * Meta title 配置
         */
        metatitle?:{
            /** 对应国际化中的键名 */
            key:string
        },
        /**
         * Meta description 配置
         */
        Metadescription?:{
            /** 对应国际化中的键名 */
            key:string
        },
        /**
         * Meta keywords 配置
         */
        metakeywords?:{
             /** 对应国际化中的键名 */
             key:string
        }
    }
} 