// vue 指令
export default (Vue) => {
  // v-focus 获取焦点
  Vue.directive('focus', function (el, binding) {
    if (binding.value) {
      let dom = el.querySelector('input') || el.querySelector('textarea')
      dom.focus()
    }
  })
}