import { request } from '@/utils'

export function getCourses(): Promise<any> {
  return request({
    url: '/courses/fundraising',
    method: 'get',
  })
}
