import Vue from 'vue'
import { Icon } from 'ant-design-vue'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1035933_0tcyg8gtird.js',
})

Vue.component('IconFont', IconFont)
