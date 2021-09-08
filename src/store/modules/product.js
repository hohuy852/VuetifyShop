import axios from 'axios'
const state = {
    products: [],
    loadingDetails: true,
}
const actions = {
    async getSingleProduct({ commit }) {
        try {
            const response = await axios.get("https://web-demo.online/product")
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