import { request } from '@/utils';

export function addCart (data: any): Promise<any> {
  return request({
    url: '/carts',
    method: 'get',
    data
  });
}

export function deleteCart (data: any): Promise<any> {
  return request({
    url: '/carts',
    method: 'delete',
    data
  });
}