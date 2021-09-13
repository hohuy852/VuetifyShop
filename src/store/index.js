import Vue from 'vue'
import Vuex from 'vuex'
import cart from '../store/modules/cart'
import products from '../store/modules/product'
import categories from '../store/modules/categories'
import auth from '../store/modules/auth'
import order from '../store/modules/order'
import createPersistedState from "vuex-persistedstate";
import Cookies from 'js-cookie'
Vue.use(Vuex)
const dataState = createPersistedState({
  paths: ['cart'],
  storage: {
    getItem: key => Cookies.get(key),
    setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
    removeItem: key => Cookies.remove(key)
  }
})
export default new Vuex.Store({
  modules: {
    cart,
    products,
    categories,
    auth,
    order,
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
  plugins: [dataState]
})
