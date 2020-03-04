/**
 * 可以实现去除开头连续的符号，或者全部符号
 * @param str
 * @param symbol
 * @param code 0 -> 清除开头连续的符号 1 -> 清除字符串中所有符号
 * @returns {string|*}
 */
export function clearAllSymbolByStart(str, symbol, code = 0) {
  if (!str) return ''
  let flag = code === 0 ? str.indexOf(symbol) === 0 : str.indexOf(symbol) !== -1
  if (flag) {
    str = str.replace(symbol, '')
    return clearAllSymbolByStart(str, symbol, code)
  } else {
    return str
  }
}
