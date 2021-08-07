import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        title: "Cafe Badilico",
        rate: "4.7",
        price: 10,
        description: "No Description",
        quantity: 1,
        category: "THEME"
      },
      {
        id: 2,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        title: "Cafe Badilico",
        rate: "4.7",
        price: 15,
        description: "No Description",
        quantity: 1,
        category: "THEME"
      },
      {
        id: 3,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        title: "Cafe Badilico",
        rate: "4.7",
        price: 20,
        description: "No Description",
        quantity: 1,
        category: "UIKIT"
      },
      {
        id: 4,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        title: "Cafe Badilico",
        rate: "4.7",
        price: 25,
        description: "No Description",
        quantity: 1,
        category: "UIKIT"
      },
      {
        id: 5,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        title: "Cafe Badilico",
        rate: "4.7",
        price: 30,
        description: "No Description",
        quantity: 1,
        category: "FREEBIES"
      },
      {
        id: 6,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        title: "Cafe Badilico",
        rate: "4.7",
        price: 35,
        description: "No Description",
        quantity: 1,
        category: "FREEBIES"
      },
      {
        id: 7,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        title: "Cafe Badilico",
        rate: "4.7",
        price: 35,
        description: "No Description",
        quantity: 1,
        category: "FREEBIES"
      },
      {
        id: 8,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        title: "Cafe Badilico",
        rate: "4.7",
        price: 35,
        description: "No Description",
        quantity: 1,
        category: "FREEBIES"
      },
      {
        id: 9,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        title: "Cafe Badilico",
        rate: "4.7",
        price: 35,
        description: "No Description",
        quantity: 1,
        category: "FREEBIES"
      },
      {
        id: 10,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        title: "Cafe Badilico",
        rate: "4.7",
        price: 35,
        description: "No Description",
        quantity: 1,
        category: "FREEBIES"
      },


    ],
    cart: [],
    users:[
      {
        email: "a",
        password:"a",
      }
     
    ],
  },
  mutations: {
    ADD_CART(state, productId) {
      state.products.map(product => {
        if (product.id === productId) {
          var found = false;
          for (var i = 0; i < state.cart.length; i++) {
            if (state.cart[i].id === productId) {
              state.cart[i].quantity++;
              found = true;
            }
           
          }
          if(!found)  state.cart.unshift(product)
        }

      })
    },
    DELETE_PRODUCT(state, productId) {
      state.cart = state.cart.filter(product => product.id !== productId)
    }, 
    ADD_USER(state,user){
      state.users.push(user)
    },
    USER_LOGIN(state, email, password){
        state.users.map(user =>{
          if (user.email === email && user.password===password){
            return true
          }
          else return false
        })
    }
  },
  actions: {
    addToCart({ commit }, productId) {
       commit('ADD_CART', productId)
     },
    deleteItem({commit}, productId){
       commit('DELETE_PRODUCT', productId)
     }
  },
  modules: {
  },
  getters: {
      cartSize(state){
        return state.cart.length;
      },
      totalProduct(state){
        var totalProduct = state.cart.reduce((pre, cur) => {
            return pre + cur.quantity 
        },0)
       // console.log(totalProduct)
        return totalProduct
      },
      totalPrice(state){
        state.cart.map(product => {
          for(var i =0; i< state.cart.length; i++)
            if(state.cart[i].id == product.id)
            return state.cart[i].quantity * state.cart[i].price
        })
      }
      
  }
})
