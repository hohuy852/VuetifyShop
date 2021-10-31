import axios from "axios"
const state = {
    catItems: [],
    loading: true,
}

const actions = {
    async getProduct({ commit }) {
        try {
            const response = await axios.get('https://web-demo.online/category?fbclid=IwAR3VSOyMm_1ZnV7635OY3L-jm-MoUdH2x6S7jSIaA2ELiYM1xSxsT8NRj9o')
            commit('GET_PRODUCT', response.data.entries)
            console.log(response.data.entries)
        }
        catch (error) {
            console.log(error)
        }
    },
}
const mutations = {
    GET_PRODUCT(state, categories) {
        state.catItems = categories
        state.loading = false
    },
}
const getters = {
    loading: state => state.loading,
    categories: state => state.catItems,
}
export default {
    state,
    actions,
    mutations,
    getters,
}