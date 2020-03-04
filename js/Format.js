Date.prototype.format = function (fmt) {   // eslint-disable-line
  let o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

// 格式化时间
export let formatDate = (date = new Date(), format_str = 'yyyy-MM-dd') => {
  if (!date) {
    return 'N/A'
  } else {
    return new Date(date).format(format_str)
  }
}
// 将数字格式化为小数保留两位小数
export let formatDecimal = (value) => {
  if (!value || value === 0) return '0.00'
  let rs = '0.00'
  if (typeof value === 'string') {
    rs = parseFloat(value).toFixed(2)
  } else {
    rs = value.toFixed(2)
  }
  return rs
}
// 格式化名称(可将中文、英文自动识别调整顺序)
export let formatName = ({ firstName, lastName }) => {
  if (!firstName || !lastName) return
  let fullName = lastName.trim() + firstName.trim()
  if (!/^[\u4E00-\u9FA5]+(·[\u4E00-\u9FA5]+)*$/.test(fullName)) {
    fullName = firstName.trim() + ' ' + lastName.trim()
  }
  return fullName
}