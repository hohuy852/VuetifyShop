import axios from "axios"
const API_URL = 'https://web-demo.online/'
const state = {
    updateStatus: false,
    info: []
}
const actions = {
    updateProfile({ commit }, profile) {
        return axios
            .post(API_URL + 'changeInfo',
                {
                    firstName: profile.firstName,
                    lastName: profile.lastName,
                    phonenumber: profile.phoneNumber,
                    gender: profile.gender,
                    DOB: profile.date
                },
                {
                    headers: {
                        Authorization: profile.access_token
                    }
                })

            .then(commit('UPDATE_PROFILE'), console.log(profile))
    },
    getProfile({commit}, access_token){
        return axios
        .get(API_URL + 'getInfo',{
            headers:{
                Authorization: access_token
            }
        })
        .then (response => commit('GET_INFO', response.data))
    }
}
const mutations = {
    UPDATE_PROFILE(state) {
        state.updateStatus = true
    },
    GET_INFO(state, info){
        state.info = info
    }
}
const getters = {
    updateStatus: state => state.updateStatus
}
export default {
    state,
    actions,
    mutations,
    getters
}