import { LoginRequest } from "./interfaces";
import { request } from '@/utils';

export function login (data: LoginRequest): Promise<any> {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  });
} 

export function getMe (): Promise<any> {
  return request({
    url: '/me',
    method: 'get'
  });
}