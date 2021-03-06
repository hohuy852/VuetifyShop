import Vue from 'vue'
import VueRouter from 'vue-router'
import VueGtag from "vue-gtag";
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
    path: '/product/:slug',
    name: 'Product',
    component: () => import( /* webpackChunkName: "product" */ '../views/Product.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */'../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */'../views/Login.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "checkout" */'../views/Checkout.vue'),
  },
  {
    path: '/themes',
    name: 'Themes',
    component: () => import(/* webpackChunkName: "themes" */'../views/Themes.vue')

  },
  {
    path: '/uikits',
    name: 'UIKits',
    component: () => import(/* webpackChunkName: "uikits" */'../views/Uikits.vue')

  },
  {
    path: '/freebies',
    name: 'Freebies',
    component: () => import(/* webpackChunkName: "freebies" */'../views/Freebies.vue')

  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import(/* webpackChunkName: "forgorpassword" */'../views/ForgotPassword.vue')
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
        path: 'information',
        name: 'Infomations',
        component: () => import(/* webpackChunkName: "Infos" */'../components/Infomations.vue')
      },
      {
        path: 'wishlist',
        name: 'Wishlist',
        component: () => import(/* webpackChunkName: "Wishlist" */'../components/Wishlist.vue')
      },
      {
        path: 'change-password',
        name: 'ChangePassword',
        component: () => import(/* webpackChunkName: "changePassword" */'../components/ChangePassword.vue')
      }
    ],
    meta: { requiresAuth: true }
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
Vue.use(VueGtag, {
  config: { id: "UA-210003077-1" }
}, router);
router.beforeEach((to, from, next) => {
  const loggedIn = router.app.$store.state.auth.status.loggedIn;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!loggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  }
  else {
    next();
  }

})

export default router
