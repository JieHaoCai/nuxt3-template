import type { Component } from "vue"
import type { NestedMenuItem } from "./NestedMenuItem"

/**
 * 页脚配置接口
 * @interface FooterType
 * @description 定义网站页脚的所有配置项
 */
export interface FooterType{
    /** 页脚 logo 图标路径 */
    icon:string
    /** 页脚标题 */
    title:string
    /** 页脚描述文本 */
    desc:string
    /**
     * 外部链接列表（社交媒体等）
     * @description 用于显示社交媒体图标和链接
     */
    externalLink?:[{
        /** 链接名称标识 */
        name:string,
        /** 链接图标，支持图片路径或 Vue 组件 */
        icon:string | Component,
        /** 链接地址 */
        link:string
    }]
    /**
     * 页脚菜单列表
     * @description 支持多列菜单结构，每个菜单可包含子项
     */
    menu:NestedMenuItem[]
    /** 版权信息文本 */
    copyright:string
    /** 页脚右下角提示文本 */
    bottomRightTip:string
}