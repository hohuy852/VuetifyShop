import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
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
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Account.vue'),
    children: [
      {
        path: 'orders',
        name: 'OrderDetails',
        component: () => import(/* webpackChunkName: "Order" */'../components/Orders.vue')
      },
      {
        path: 'info',
        name: 'Infomations',
        component: () => import(/* webpackChunkName: "Infos" */'../components/Infomations.vue')
      }
    ]
  }
  // {
  //   path: "/profile/:id",
  //   name: 'Profile',
  //   component: () => import('../views/Account.vue'),
  //   props: true,
  //   children: [
  //     {
  //       path: "",
  //       component: import(/* webpackChunkName: "Order" */'../components/Orders.vue')
  //     },
  //     {
  //       path: "project",
  //       component: import(/* webpackChunkName: "Info" */'../components/Infomations.vue')
  //     }
  //   ]
  // }
]

const router = new VueRouter({
    mode: 'history',
  base: process.env.BASE_URL,
  routes,
 
})

export default router
