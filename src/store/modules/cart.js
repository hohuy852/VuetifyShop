import axios from "axios"
import api from '../../services/api'
//import authHeader  from "../../services/auth-header"
const API_URL = 'https://web-demo.online/'
// const cart = window.localStorage.getItem('cart')

const state = {
  toggleCart: false,
  items: [],
  cartState: false,
  navId: 0,
}
const actions = {
  deleteItem({ commit }, cartInfo) {
    // commit('DELETE_PRODUCT', productId)
    // commit('SAVE_CART')
    return axios
      .post(API_URL + 'removeCart',
        {
          idProduct: cartInfo.productId
        },
        {
          headers: {
            Authorization: cartInfo.access_token
          }
        }

      )
      .then(commit('DELETE_PRODUCT', cartInfo.productId))

  },
  addProductToCart({ commit }, productInfo) {
    return axios
      .post(API_URL + 'addCart',
        {
          idProduct: productInfo.productId,
          quantity: 1
        },
        {
          headers: {
            Authorization: productInfo.access_token
          },
        })
      .then(commit('PUSH_TO_CART'))
  },
  addLocalCart({ commit }, productItem) {
    //find cartItem 
    // const cartItems =('vuex', JSON.parse(localStorage.getItem('vuex')))
    const cartItem = state.items.find(item => item.idProduct._id === productItem._id)
    //console.log(cartItems)
    if (!cartItem) {
      //push to cart
      commit('PUSH_TO_LOCAL_CART', productItem)
    }
    else {
      //increase Qty
      commit('INCREASE_QTY', cartItem)
    }
    commit('SAVE_CART')
  },
  deleteLocalCart({commit}, productId){
    commit('DELETE_LOCAL_PRODUCT', productId)
  },
  async getCartItems({ commit }, access_token) {
    return api
      .get('cart')
      .then(response => {
       // console.log(access_token),
       access_token
        commit('GET_CART_ITEMS', response.data.cart)
          //console.log(response.data.cart)
          
      })
  }
}
const mutations = {
  DELETE_PRODUCT(state) {
    //, productId
    //state.items = state.items.filter(item => item.idProduct._id !== productId)
    state.cartState = true
  },
  DELETE_LOCAL_PRODUCT(state,productId) {
    //, productId
    state.items = state.items.filter(item => item.idProduct._id !== productId)
    state.cartState = true
  },
  PUSH_TO_CART(state) {
    state.cartState = true
    //state.navId++
    state.addSnackbar = true
    //this.commit('SAVE_DATA')
  },
  PUSH_TO_LOCAL_CART(state, idProduct) {
    state.items.unshift({
      idProduct,
      quantity: 1,
    })
    state.cartState = true
    //state.toggleCart = !state.toggleCart
    state.addSnackbar = true
  },
  INCREASE_QTY(state, cartItem) {
    cartItem.quantity++
  },
  TOGGLE_CART(state, toggle) {
    state.toggleCart = toggle
  },
  SAVE_CART(state) {
    window.localStorage.setItem('cart', JSON.stringify(state.items))
  },
  GET_CART_ITEMS(state, cart) {
    state.items = cart
    state.cartState = true
    // if (state.items != 0 && state.navId > 0)
    //   state.toggleCart = !state.toggleCart

  },
}
const getters = {
  totalProduct(state) {
    if (state.cartState == true) {
      var totalProduct = state.items.reduce((pre, cur) => {
        return pre + cur.quantity
      }, 0)
      // console.log(totalProduct)
      return totalProduct
    }
    if (state.items == 0) {
      return 0
    }
  },
  totalPrice(state) {
    if (state.cartState == true) {
      var sum = 0;
      for (var i = 0; i < state.items.length; i++) {
        //console.log(state.cart[i].price * state.cart[i].quantity)
        sum += state.items[i].idProduct.price * state.items[i].quantity
      }
      return parseFloat(sum).toFixed(2)
    }
    if (state.items == 0) {
      return 0
    }
  },
  cart: state => state.items
}

export default {
  state,
  actions,
  mutations,
  getters
}