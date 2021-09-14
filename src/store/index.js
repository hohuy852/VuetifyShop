import Vue from 'vue'
import Vuex from 'vuex'
import cart from '../store/modules/cart'
import products from '../store/modules/product'
import categories from '../store/modules/categories'
import auth from '../store/modules/auth'
import order from '../store/modules/order'
//import createPersistedState from "vuex-persistedstate";
import resetPassword from './modules/resetPassword'
//import Cookies from 'js-cookie'
//import VuexPersist from "vuex-persist";
Vue.use(Vuex)
// const vuexCookie = new VuexPersist({
//   key: "myLocalStore", // The key to store the state on in the storage provider.
//   storage: localStorage, // or window.sessionStorage or localForage
//   modules: ["cart"]
// });

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
//  plugins: [vuexCookie.plugin]
})
