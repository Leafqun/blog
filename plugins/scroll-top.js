import Vue from 'vue'

Vue.prototype.$scrollTop = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
