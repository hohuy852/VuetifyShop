import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
//import store from "../store/index";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path:'/product/:slug',
    name: 'Product',
    component:()=>import ( /* webpackChunkName: "product" */ '../views/Product.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component:()=>import (/* webpackChunkName: "register" */'../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component:()=>import (/* webpackChunkName: "login" */'../views/Login.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component:()=>import (/* webpackChunkName: "login" */'../views/Checkout.vue')
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import (/* webpackChunkName: "forgorpassword" */'../views/ForgotPassword.vue')
  },
  {
    path: '/profile',
    component: () => import('../views/Account.vue'),
    children: [
      {
        path: '/',
        name: 'OrderDetails',
        component: () => import(/* webpackChunkName: "Order" */'../components/Orders.vue')
      },
      {
        path: 'infomation',
        name: 'Infomations',
        component: () => import(/* webpackChunkName: "Infos" */'../components/Infomations.vue')
      }
    ],
    meta: {requiresAuth : true}
  },
  {
    path: "*",
    name: "notFound",
    component: () => import(/* webpackChunkName: "NotFound" */'../views/404NotFound.vue')
  },
]

const router = new VueRouter({
    mode: 'history',
  base: process.env.BASE_URL,
  routes,
 
})

router.beforeEach((to, from, next) => {
   const loggedIn = localStorage.getItem('user');
    if(to.matched.some(record => record.meta.requiresAuth)){
      if (!loggedIn) {
        next({ name: "Login"});
      } else {
        next();
      }
     }
    else {
      next();
    }

})

export default router
