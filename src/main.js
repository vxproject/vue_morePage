// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)//全局使用ElementUI




Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })


// 引入路由
import router from  './router.js'

// 把路由注入到根实例中，启动路由。
new Vue({
  el:'#app',
  router,
  render:h=>h(App)
})


