import axios from "axios"
const API_URL = 'https://web-demo.online/'
// const cart = window.localStorage.getItem('cart')

const state = {
  toggleCart: false,
  items: [],
  cartState: false,
  navId: 0
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
    //find cartItem 
    // const cartItems =('vuex', JSON.parse(localStorage.getItem('vuex')))
    //const cartItem = state.items.find(item => item.product._id === productItem._id)
    //console.log(cartItems)
    //if (!cartItem) {
    //push to cart
    // commit('PUSH_TO_CART', productItem)
    //}
    //else {
    //increase Qty
    //  commit('INCREASE_QTY', cartItem)
    //}
    //commit('SAVE_CART')
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
  getCartItems({ commit }, access_token) {
    return axios
      .get(API_URL + 'cart', {
        headers: {
          Authorization: access_token
        }
      })
      .then(response => {
        //console.log(access_token),
        commit('GET_CART_ITEMS', response.data)
      })
  }
}
const mutations = {
  DELETE_PRODUCT(state, productId) {
    state.items.cart = state.items.cart.filter(item => item.idProduct._id !== productId)
    state.cartState = true
  },
  PUSH_TO_CART(state) {
    //  state.items.cart.unshift({
    //     product,
    //  })
    state.cartState = true
    //this.commit('SAVE_DATA')
  
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
  },
}
const getters = {
  totalProduct(state) {
    if (state.cartState == true) {
      var totalProduct = state.items.cart.reduce((pre, cur) => {
        return pre + cur.quantity
      }, 0)
      // console.log(totalProduct)
      return totalProduct
    }

  },
  totalPrice(state) {
    if (state.cartState == true) {
      var sum = 0;
      for (var i = 0; i < state.items.cart.length; i++) {
        //console.log(state.cart[i].price * state.cart[i].quantity)
        sum += state.items.cart[i].idProduct.price * state.items.cart[i].quantity
      }
      return parseFloat(sum).toFixed(2)
    }
  },
  cart: state => state.items.cart
}

export default {
  state,
  actions,
  mutations,
  getters
}