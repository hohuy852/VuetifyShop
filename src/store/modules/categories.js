import axios from "axios"
const state = {
    items: [],
    loading: true,
}

const actions = {
    async getProduct({ commit }) {
        try {
            const response = await axios.get('https://demo-tttn.herokuapp.com/category?fbclid=IwAR3VSOyMm_1ZnV7635OY3L-jm-MoUdH2x6S7jSIaA2ELiYM1xSxsT8NRj9o')
            commit('GET_PRODUCT', response.data.entries)

        }
        catch (error) {
            console.log(error)
        }
    },
}
const mutations = {
    GET_PRODUCT(state, categories) {
        state.items = categories
        state.loading = false
    },
}
const getters = {
    loading: state => state.loading,
    categories: state => state.items,
}
export default {
    state,
    actions,
    mutations,
    getters,
}