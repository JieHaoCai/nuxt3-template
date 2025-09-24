export const testApi = (params = {}, sign = '', cancelToken = null) => {
  const { $axios } = useNuxtApp()
  
  return $axios({
    url: "resume/select/myResumeInfoList",
    method: "GET",
    params,
    headers: {
      sign: sign,
    },
  })
}