export interface CartData {
  id: number | string
  image: string
  name: string
  subtotal: number
  total: number
}

export interface Cart {
  data: CartData[]
  global_coupon: {}
  subtotal: number
  total: number
}