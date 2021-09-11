import Vue from 'vue'
import Vuex from 'vuex'

import cart from '../store/modules/cart'
import products from '../store/modules/product'
import categories from '../store/modules/categories'
import auth from '../store/modules/auth'
import order from '../store/modules/order'
//import user from '../store/modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products,
    categories,
    auth,
    order
  },
  state: {
   // auth: true
  },
  mutations: {

  },
  actions: {
  

  },

  getters: {
   
    
  },
})
