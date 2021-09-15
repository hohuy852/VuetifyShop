import Vue from 'vue'
import Vuex from 'vuex'
import cart from '../store/modules/cart'
import products from '../store/modules/product'
import categories from '../store/modules/categories'
import auth from '../store/modules/auth'
import order from '../store/modules/order'
// import createPersistedState from "vuex-persistedstate";
// import Cookies from 'js-cookie'
import resetPassword from './modules/resetPassword'
//import VuexPersistence from 'vuex-persist';
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    cart,
    products,
    categories,
    auth,
    order,
    resetPassword
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
  // plugins: [createPersistedState({
  //   storage: {
  //     getItem: (key) => Cookies.get(key),
  //     setItem: () => {} ,
  //     removeItem: (key) => Cookies.remove(key)
  //   }
  // })]
})
