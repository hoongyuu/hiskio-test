/* eslint-disable no-console */
import axios, { AxiosRequestConfig, AxiosError } from 'axios'
import { getToken } from './storage'

function parse2QueryString(obj: Record<string, any> = {}) {
  return new URLSearchParams(JSON.parse(JSON.stringify(obj))).toString()
}

function createHTTPClient(options: AxiosRequestConfig = {}) {
  const request = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
      accept: 'application/json',
    },
    ...options,
  })

  // request interceptor
  request.interceptors.request.use(
    (config) => {
      const token = getToken()
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }

      return config
    },
    (error) => {
      console.error(error)
      return Promise.reject(error)
    }
  )

  // response interceptor
  request.interceptors.response.use(
    (response) => {
      const { config, data } = response

      const style = 'color: lightGreen'
      const qs = parse2QueryString(config.params)
      console.log(
        `%c ${config.method} ${config.url}${qs ? `?${qs}` : ''} 😁 `,
        style,
        response
      )

      return data
    },
    (error: AxiosError) => {
      const { config } = error

      const qs = parse2QueryString(config.params)
      console.error(`${config.method} ${config.url}${qs ? `?${qs}` : ''} 😭 `, {
        ...error,
      })

      return Promise.reject(error)
    }
  )

  return request
}

export const request = createHTTPClient()
