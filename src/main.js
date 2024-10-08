import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router.js'
import './assets/css/global.css'
// import './plugins/element.js'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//引入全局组件
import Bread from './components/common/breadcrumb'
Vue.component('Bread',Bread)

//导入公共方法
// 类似全局事件总线，所有组件都能直接调用
import { errorDialog, addItem, changeItem, delItem, timeChange } from './common/Common.js'
Vue.prototype.$errorDialog = errorDialog
Vue.prototype.$addItem = addItem
Vue.prototype.$changeItem = changeItem
Vue.prototype.$delItem = delItem
Vue.prototype.$timeChange = timeChange


import axios from './plugins/axios.js'
Vue.prototype.$http = axios

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
    //$bus就是当前的vm
    Vue.prototype.$bus = this
  },
}).$mount('#app')
