export const useMyStore = defineStore("myStore",{
    state:()=>{
        return{
            counter:1
        }
    },
    actions:{
         increment() {
           this.counter++
         },
    }
})