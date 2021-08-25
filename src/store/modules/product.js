import axios from 'axios'
const state = {
    products: [],
    loadingDetails: true,
}
const actions = {
    async getSingleProduct({ commit }) {
        try {
            const response = await axios.get("https://demo-tttn.herokuapp.com/product")
            commit('GET_SINGLE', response.data.entries)
           
        }
        catch (error) {
            console.log(error)
        }
    },
}
const mutations = {
    GET_SINGLE(state, products) {
        state.products = products
        state.loadingDetails = false
    },
    ADD_PRODUCT({state, rootState}, productId){
        state.products.find(product => {
          if(product.id === productId){
            var found = false
            for (var i = 0; i < rootState.cart.items.length; i++) {
              if ( rootState.cart.items[i].id === productId) {
                rootState.cart.items[i].quantity++;
                found = true;
              }
            }
            if (!found) rootState.cart.items.unshift(product)
          }
        })
    },

}
const getters = {
    products: state => state.products,
    loadingDetails: state => state.loadingDetails
}
export default {
    state,
    actions,
    mutations,
    getters
}