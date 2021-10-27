/**
 * 路由器模块
 */

import VueRouter from 'vue-router'
import Vue from 'vue'

import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            name:'defalut',
            path:'/',
            // redirect是指默认到/msite的路径去
            redirect:'/msite'
        },
        {
            name:'waimai',
            path:'/msite',
            component: Msite
        },
        {
            name:'dingdan',
            path:'/order',
            component:Order
        },
        {
            name:'search',
            path:'/search',
            component:Search
        },
        {
            name:'gerenzhuye',
            path:'/profile',
            component: Profile
        },
        {
            name:'login',
            path:'/login',
            component:Login,
        }
    ]
})