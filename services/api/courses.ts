// import { AxiosPromise } from 'axios'
import { request } from '@/utils'
// import { Course } from '~/interfaces'

export function getCourses(): Promise<any> {
  return request({
    url: '/courses/fundraising',
    method: 'get',
  })
}
