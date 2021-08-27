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
    ],
    meta: {requiresAuth : true}
  },
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
// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login', '/register'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }

//   next();
// })
export default router
