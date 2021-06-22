import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index.vue' 
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Details from './views/Details.vue'
import Product from './views/Product.vue'
import Brands from './views/Brands.vue'
import NotFound from './views/NotFound.vue'
import Add from './views/Add.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Index},
    {path:'/index',component:Index},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'/details',component:Details},
    {path:'/product/:pid',component:Product},
    {path:'/brands',component:Brands},
    {path:'/add',component:Add},
    {path:'/*',component:NotFound},
  ]
})
