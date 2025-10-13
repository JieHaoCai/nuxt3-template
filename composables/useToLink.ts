
import type { NestedMenuItem } from "~/types/NestedMenuItem";


export const useToLink = ()=>{
    const localePath  = useLocalePath()
    const {  locale } = useI18n();
    
    const toLink = (navbarItem:NestedMenuItem)=>{
        const href = navbarItem.href
        if(!href){
            console.log("当前链接为空",navbarItem)
            return
        }

        // 获取链接的第一个字符
        const firstChar = href.charAt(0)

        // 如果是#，则说明是锚点，使用scrollTo方法
        if(firstChar === '#'){
            const id = href.slice(1) // 去掉#号
            setTimeout(() => {
                const targetElement = document.getElementById(id); // 获取目标元素
                if (!targetElement) return;
                targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
                });
            }, 20);
            return
        }

        // 如果是外部链接(http/https)，直接打开新窗口
        if(href.startsWith('http://') || href.startsWith('https://')){
            window.open(href, '_blank')
            return
        }
        // 如果是/开头，说明是内部跳转链接，使用 navigateTo + localePath
        if(firstChar === '/'){
            navigateTo(localePath(href, locale.value))
            return
        }
    }

    return { toLink }
} 