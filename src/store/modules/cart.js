const cart = window.localStorage.getItem('cart')

const state = {
  toggleCart: false,
  items: cart ? JSON.parse(cart) : []
}
const actions = {
  deleteItem({ commit }, productId) {
    commit('DELETE_PRODUCT', productId)
  },
  addProductToCart({ commit }, productItem) {
    //find cartItem 
    // const cartItems =('vuex', JSON.parse(localStorage.getItem('vuex')))
    const cartItem = state.items.find(item => item.product._id === productItem._id)
    //console.log(cartItems)
    if(!cartItem){
    //push to cart
    commit('PUSH_TO_CART', productItem)
    }
    else{
      //increase Qty
      commit('INCREASE_QTY', cartItem)
    }
    window.localStorage.setItem('cart', JSON.stringify(state.items));
  
  },
}
const mutations = {
  DELETE_PRODUCT(state, productId) {
    state.items = state.items.filter(item => item.product.id !== productId)
  },
  PUSH_TO_CART(state, product) {
    state.items.unshift({
      product,
      quantity: 1
    })
    //this.commit('SAVE_DATA')
 
  },
  INCREASE_QTY(state, cartItem) {
    cartItem.quantity++
  },
  TOGGLE_CART(state, toggle){
    state.toggleCart = toggle
  },
  // SAVE_CART(state){
  //   window.localStorage.setItem('cart', JSON.stringify(state.items))
  // }
}
const getters = {
  totalProduct(state) {
    var totalProduct = state.items.reduce((pre, cur) => {
      return pre + cur.quantity
    }, 0)
    // console.log(totalProduct)
    return totalProduct
  },
  totalPrice(state) {
    var sum = 0;
    for (var i = 0; i < state.items.length; i++) {
      //console.log(state.cart[i].price * state.cart[i].quantity)
      sum += state.items[i].product.price * state.items[i].quantity
    }
    return parseFloat(sum).toFixed(2)
  },
  cartSize(state) {
    return state.items.length;
  },
  cart: state => state.items,
}

export default {
  state,
  actions,
  mutations,
  getters
}