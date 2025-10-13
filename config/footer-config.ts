import type { FooterType } from "~/types/footer";

export const footerList:FooterType = {
    icon:'/img/logo.png',
    title:'魔法绘本工坊',
    desc:'desc',
    externalLink:[
        {
            name: "facebook",
            icon: "/img/facebook.png",
            link: "https://www.facebook.com/profile.php?id=61563763516966"
        }
    ],
    menu:[
       {
           title: 'footer.product.title',
           items:[
            {
                title:'footer.product.AIHB'
            }
           ]
       },
       {
           title: 'footer.supportCenter.title',
           items:[
            {
                title:'footer.supportCenter.help'
            },
            {
                title:'footer.supportCenter.callme'
            }
           ]
       },
       {
           title: 'footer.lawer.title',
           items:[
            {
                title:'footer.lawer.policy'
            }
           ]
       },
    ],
    copyright:"© 2025 魔法绘本工坊. 保留所有权利.",
    bottomRightTip:"Made with for children everywhere"
}