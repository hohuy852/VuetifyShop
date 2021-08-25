import Vue from 'vue'
import Vuex from 'vuex'
//import createPersistedState from "vuex-persistedstate";
import cart from '../store/modules/cart'
import products from '../store/modules/product'
import categories from '../store/modules/categories'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products,
    categories,
  },
  state: {
   
    user: null,
  
   
    snackbar: false,

  },
  // plugins: [createPersistedState()],
  mutations: {



    ADD_USER(state, user) {
      state.users.push(user)
      state.snackbar = true
    },
    // USER_LOGIN(state, email, password) {
    //   state.users.map(user => {
    //     if (user.email === email && user.password === password) {
    //       console.log('Success')
    //       return true
    //     }
    //   })
    // },
   

  },
  actions: {
  

  },

  getters: {
   
    
  },
})
