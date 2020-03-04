/**
 * 倒计时计数，常常用于验证码倒计时
 * @param {Function} fn 回调，含有参数 count，间隔计次
 * @param {Number} time 默认倒计时秒数
 * @param {Bollean} done 是否主动清除定时器
 * @param {Number} step 间隔计数时间 单位ms 
 * 
 * @returns {Object} Interval 对象,可在外部清除
 */ 
export function countDown(fn, time = 6, done, step = 1000) {
  let count = time
  const interval = setInterval(() => {
    if (done) {
      return clearInterval(interval)
    }
    count--
    fn(count)
    if (count === 0) {
      clearInterval(interval)
    }
  }, step)
  return interval
}