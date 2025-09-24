export default defineNuxtPlugin({
  name: 'localStorage',
  setup(nuxtApp){
    const localStorage = {
      /**
       * 设置localStorage
       * @param key 键
       * @param value 值
       * @param expire 过期时间，单位为毫秒,0为永不过期
       */
      setItem(key:string, value:any,expire:number = 0) {
          if (value === '' || value === null || value === undefined) {
              value = null;
          }
          let data = {
            value:value,
            time:Date.now(),
            expire:expire
          }
          window.localStorage.setItem(key, JSON.stringify(data))
      },
      /**
       * 获取localStorage
       * @param key 键
       * @returns 值
       */
      getItem(key:string) {
        let data = window.localStorage.getItem(key)
        if(data){
          let {value,time,expire} = JSON.parse(data)
          if(expire==0){
            return value
          }
          if(expire > 0 && time + Date.now() > expire){
            window.localStorage.removeItem(key)
            return null
          }
          return value
        }
        return null
      },
      /**
       * 删除localStorage
       * @param key 键
       */
      removeItem(key:string) {
          window.localStorage.removeItem(key)
      }
    }
    return {
        provide:{
            localStorage:localStorage
        }
    }
  }
})