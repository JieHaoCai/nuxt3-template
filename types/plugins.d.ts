import type { AxiosInstance } from 'axios'

//编写插件需要声明
declare module '#app' {
  interface NuxtApp {
    $localStorage: {
      setItem: (key: string, value: any, expire?: number) => void
      getItem: (key: string) => any
      removeItem: (key: string) => void
    }
    $axios: AxiosInstance
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $localStorage: {
      setItem: (key: string, value: any, expire?: number) => void
      getItem: (key: string) => any
      removeItem: (key: string) => void
    }
    $axios: AxiosInstance
  }
}

export {}
