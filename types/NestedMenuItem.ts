import type { Component } from 'vue'

/**
 * 嵌套菜单项接口
 * @interface NestedMenuItem
 * @description 用于导航栏、菜单等需要嵌套结构的组件
 */
export interface NestedMenuItem{
    /** 菜单项标题 */
    title:string
    /**
     * 菜单项链接
     * @example '#section-id' - 锚点链接
     * @example '/about' - 内部路由
     * @example 'https://example.com' - 外部链接
     */
    href?:string
    /**
     * 菜单项图标
     * @description 支持 HTML 字符串（如 iconfont）或 Vue 组件
     * @example '<i class="iconfont icon-home"></i>'
     * @example HomeIcon (Vue Component)
     */
    icon?: string | Component
    /**
     * 子菜单项
     * @description 支持多级嵌套菜单结构
     */
    items?:NestedMenuItem[]
    /**
     * 是否为外部链接
     * @description true 时会在新窗口打开链接
     */
    external?:boolean
}