import VueRouter from 'vue-router'

import HomeContainer from './comporents/tabbar/HomeContainer.vue'
import MenberContainer from './comporents/tabbar/MenberContainer.vue'
import SearchContainer from './comporents/tabbar/SearchContainer.vue'
import ShopcarContainer from './comporents/tabbar/ShopcarContainer.vue'

var router = new VueRouter({
  routes: [ 
    { path:'/home', component: HomeContainer},
    { path:'/member', component: MenberContainer},
    { path:'/search', component: SearchContainer},
    { path:'/shopcar', component: ShopcarContainer},
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router