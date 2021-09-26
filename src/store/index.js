import Vue from 'vue'
import Vuex from 'vuex'
import cart from '../store/modules/cart'
import products from '../store/modules/product'
import categories from '../store/modules/categories'
import auth from '../store/modules/auth'
import order from '../store/modules/order'
import profile from '../store/modules/profile'
import resetPassword from './modules/resetPassword'
import wishlist from './modules/wishlist'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    cart,
    products,
    categories,
    auth,
    order,
    resetPassword,
    profile,
    wishlist
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
