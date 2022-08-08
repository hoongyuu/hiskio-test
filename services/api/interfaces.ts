export interface CartItem {
  id: number
  coupon: string
}

export interface LoginRequest {
  account: string
  password: string
  confirm: boolean
}

export interface CartRequest {
  items: CartItem[]
  coupons: any[]
}