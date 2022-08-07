import _ from 'lodash'

/**
 * 新增千分號符號
 * ex:1,000
 */
export const getThousandSeparator = (stringNumber: string | number) => {
  const formattedStringNumber: string = _.isNumber(stringNumber)
    ? String(stringNumber)
    : stringNumber
  // eslint-disable-next-line prefer-regex-literals
  const regex = new RegExp('(\\d{1,3})(?=(\\d{3})+(?:$|\\D))', 'g')
  return formattedStringNumber.replace(regex, '$1,')
}
