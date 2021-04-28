import Vue from 'vue'

import app from './App.vue'

import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入路由
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

import './lib/mui/dist/css/mui.min.css'
import './lib/mui/dist/css/icons-extra.css'

import router from './router.js'



let vm = new Vue({
  el: '#app',
  render: c => c(app),
  router // 1.4 挂载路由对象到 VM 实例上
})

