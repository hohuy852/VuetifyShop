import axios from "axios"
const API_URL = 'https://web-demo.online/'
const state = {
    updateStatus: false,
}
const actions = {
    updateProfile({commit}, profile){   
        return axios
        .post(API_URL + 'changeInfo',
        {
           firstName: profile.firstName,
            lastName:profile.lastName
        },
        {
            headers:{
                Authorization: profile.access_token
            }
        })
        
        .then(commit('UPDATE_PROFILE'), console.log(profile))
    },
    // getProfile({commit}){

    // }
}
const mutations = {
    UPDATE_PROFILE(state){
        state.updateStatus = false
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