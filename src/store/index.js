import Vue from 'vue'
import Vuex from 'vuex'

import cart from '../store/modules/cart'
import products from '../store/modules/product'
import categories from '../store/modules/categories'
import login from '../store/modules/login'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products,
    categories,
    login
  },
  state: {

  },

  mutations: {

  },
  actions: {
  

  },

  getters: {
   
    
  },
})
