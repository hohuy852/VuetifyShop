import axios from 'axios'
const state = {
    banner: null
}
const actions = {
    async getBanner({ commit }) {
        return axios.get('https://web-demo.online/admin/lastBanner')
            .then(res => {
                commit('GET_BANNER', res.data), console.log(res.data)
            }

            )
    }
}
const mutations = {
    GET_BANNER(state, banner){
        state.banner = banner
    }
}
const getters = {
    banner: state => state.banner
}
export default {
    state,
    actions,
    mutations,
    getters
}