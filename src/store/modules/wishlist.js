import axios from "axios"
const API_URL = 'https://web-demo.online/'
const state = {
    wishlist: []
}
const actions = {
    getWishlist({ commit }, access_token) {
        return axios
            .get(API_URL + 'wishlist', {
                headers: {
                    Authorization: access_token
                }
            })
            .then(response => commit('GET_WISHLIST', response.data))
    },
    addWishlist({ commit }, item) {
        return axios
            .post(API_URL + 'addWishlist', {
                idProduct: item.idProduct
            },
                {
                    headers: {
                        Authorization: item.access_token
                    }
                })
            .then(commit('POST_WISHLIST'))
    },
    deleteWishlistItem({ commit }, item) {
        return axios
            .post(API_URL + 'removeWishlist', {
                idProduct: item.idProduct
            }, {
                headers: {
                    Authorization: item.access_token
                }
            })

            .then(commit('DELETE_WISH_ITEM'))
    }

}
const mutations = {
    GET_WISHLIST(state, wishlist) {
        state.wishlist = wishlist
    },
    POST_WISHLIST() {

    },
    DELETE_WISH_ITEM() {

    }
}
const getters = {
    wishlist: state => state.wishlist


}
export default {
    state,
    actions,
    mutations,
    getters
}