import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: "http://localhost:8077", // api 的 base_url
  timeout: 5000 // request timeout
})

// // request interceptor
// service.interceptors.request.use(

// )

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
      return res
  }, error => {

    return Promise.reject(error)
  })

export default service
