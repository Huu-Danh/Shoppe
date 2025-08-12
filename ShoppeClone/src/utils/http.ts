import axios, { AxiosError, type AxiosInstance, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'
import type { AuthResponse } from 'src/types/auth.type'
import { clearAccessTokenFromLS, getAccessTokenFromLS, saveAccessTokenToLS } from './auth'
class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === '/login' || url === '/register') {
          this.accessToken = (response.data as AuthResponse).data.access_token
          saveAccessTokenToLS(this.accessToken)
        } else if (url === '/logout') {
          this.accessToken = ''
          clearAccessTokenFromLS()
        }
        return response
      },
      function onRejected(error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const messgage = data.messgage || error.message
          console.log(messgage)
          toast.error(messgage)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance
export default http
