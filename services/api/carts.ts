import { CartRequest } from './interfaces'
import { request } from '@/utils'

export function getCarts(): Promise<any> {
  return request({
    url: '/carts',
    method: 'post',
    data: {
      items: [],
      coupons: [],
    },
  })
}

export function addCart(data: CartRequest): Promise<any> {
  return request({
    url: '/carts',
    method: 'post',
    data,
  })
}

export function deleteCart(data: CartRequest): Promise<any> {
  return request({
    url: '/carts',
    method: 'delete',
    data,
  })
}
