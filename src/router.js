// 导入vue
import Vue from "vue"

// 导入路由
import Vueroute from "vue-router"

// 告诉Vue要使用 Vueroute
Vue.use(Vueroute)

// 创建router 对路由进行管理，它是由构造函数 new Vueroute() 创建，接受routes 参数

export default new Vueroute({
  routes: [{
    path: '/',
    name:'first',
    component: ()=>import('@/components/first.vue')
  },
  {
    path: '/second',
    name:'second',
    component: ()=>import('@/components/second.vue')
  }]
})
