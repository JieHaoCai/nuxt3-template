export default defineNuxtRouteMiddleware((to,from)=>{
    console.log("这是一个中间件",to,from)
})