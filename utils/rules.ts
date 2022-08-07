import { Rule } from 'async-validator'

export const account: Rule = [
  { type: 'string', required: true, message: '請輸入 HISKIO ID' },
]
export const password: Rule = [
  { type: 'string', required: true, message: '請輸入密碼' },
]
