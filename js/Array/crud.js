// 去重
export function clearRepeat(arr) {
  if (arr.constructor !== Array) return arr
  return arr.filter((item, index, arr) => arr.indexOf(item) === index && item.trim() !== '')
}
/**
 * 删除数组中的一个元素
 * @param arr
 * @param value 传递进来字段匹配的value
 * @param filter 传递进来字段匹配的key
 * @returns newArr<Array>
 */
export function delArrayItem(arr, value, filter = 'id') {
  if (arguments.length < 2) return arr
  if (!value) return arr
  if (value.constructor === Array) {
    for (let i = 0; i < value.length; i++) {
      arr = arr.filter(item => item[filter] !== value[i])
    }
    return arr
  } else {
    return arr.filter(item => item[filter] !== value)
  }
}