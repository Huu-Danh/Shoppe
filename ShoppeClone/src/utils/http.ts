/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosError, type AxiosInstance, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'
class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.response.use(
      function onFulfilled(response) {
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
