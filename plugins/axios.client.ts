import axios from 'axios'

export default defineNuxtPlugin({
  name:'axios',
  dependsOn:['localStorage'], //需要等待缓存插件加载完毕
  setup(nuxtApp){
      const { $localStorage } = useNuxtApp()
      // 创建 axios 实例
      const axiosInstance = axios.create({
        baseURL: '/api',
        timeout: 3000,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      // 请求拦截器
      axiosInstance.interceptors.request.use(
        (config) => {
          const token = $localStorage.getItem('auth-token') ||""
          config.headers.Authorization = token ? `Bearer ${token}` : "";
          return config
        },
        (error) => {
          return Promise.reject(error)
        }
      )
      
      // 响应拦截器
      axiosInstance.interceptors.response.use(
        (response) => {
            if (response.headers["token"]) {
            $localStorage.setItem("token", response.headers["token"]);
            // 更新axios默认headers
            axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${response.headers["token"]}`;
            }
            return response.data;
        },
        (error) => {
          console.log(error)
            const code = parseInt(error.response && error.response.status);
            switch (code) {
            case 400:
                console.log("错误请求");
                break;
            case 401:
                console.log("请求需要验证，请登录");
                break;
            case 403:
                console.log("拒绝访问");
                break;
            case 404:
                console.log("请求错误,未找到该资源");
                navigateTo("/404");
                break;
            case 500:
                console.log("服务器端出错");
                break;
            default:
                console.log("异常错误");
            }
        }
      )
      
      return {
        provide: {
          axios: axiosInstance
        }
      }
  }
}
)