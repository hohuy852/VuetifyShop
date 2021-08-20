import Vue from 'vue'
import Vuex from 'vuex'
//import createPersistedState from "vuex-persistedstate";
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      
    ],
    categories: [
    ],
    cart: [
      
    ],
    user: null,
    loading: true,
    loadingDetails: true,
    snackbar: false,
    cartToggle: false,
  },
  // plugins: [createPersistedState()],
  mutations: {
    ADD_CART(state, { productId, categoryId }) {
      state.categories.find(category => {
        if (category.id === categoryId) {
          category.products.find(product => {
            if (product.id === productId) {
              var found = false
              for (var i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id === productId) {
                  state.cart[i].quantity++;
                  found = true;
                }
              }
              if (!found) state.cart.unshift(product)
            }
          })
        }
      })
    },
    ADD_PRODUCT(state, productId){
        state.products.find(product => {
          if(product.id === productId){
            var found = false
            for (var i = 0; i < state.cart.length; i++) {
              if (state.cart[i].id === productId) {
                state.cart[i].quantity++;
                found = true;
              }
            }
            if (!found) state.cart.unshift(product)
          }
        })
    },
    DELETE_PRODUCT(state, productId) {
      state.cart = state.cart.filter(product => product.id !== productId)
    },
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
    GET_PRODUCT(state, categories) {
      state.categories = categories
      state.loading = false
    },
    GET_SINGLE(state, products) {
      state.products = products
      state.loadingDetails = false
    }
  },
  actions: {
    addProduct({commit}, productId){
      commit('ADD_PRODUCT', productId)
    },
    // addToCart({commit}, {productId, categoryId}) {
    //   commit('ADD_CART', {productId ,categoryId})
    // },
    deleteItem({ commit }, productId) {
      commit('DELETE_PRODUCT', productId)
    },
    async getProduct({ commit }) {
      try {
        const response = await axios.get('https://demo-tttn.herokuapp.com/category?fbclid=IwAR3VSOyMm_1ZnV7635OY3L-jm-MoUdH2x6S7jSIaA2ELiYM1xSxsT8NRj9o')
        commit('GET_PRODUCT', response.data)

      }
      catch (error) {
        console.log(error)
      }
    },
    async getSingleProduct({ commit }) {
      try {
        const response = await axios.get("https://demo-tttn.herokuapp.com/product")
        commit('GET_SINGLE', response.data)
      }
      catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  },
  getters: {
    cartSize(state) {
      return state.cart.length;
    },
    totalProduct(state) {
      var totalProduct = state.cart.reduce((pre, cur) => {
        return pre + cur.quantity
      }, 0)
      // console.log(totalProduct)
      return totalProduct
    },
    totalPrice(state) {
      var sum = 0;
      for (var i = 0; i < state.cart.length; i++) {
        //console.log(state.cart[i].price * state.cart[i].quantity)
        sum += state.cart[i].price * state.cart[i].quantity
      }
      return parseFloat(sum).toFixed(2)
    },


  },
  created(){
    this.getSingleProduct()
  }
})
