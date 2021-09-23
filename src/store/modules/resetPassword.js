import axios from "axios"
const API_URL = 'https://web-demo.online/'

const state = {
    sendSuccess: false,
}
const actions = {
    sendRequest({commit}, email){
        return axios
        .post(API_URL + 'resetPassword', {
            email: email
        })
        .then(commit('SEND_SUCCESS'))
    },
    changePassword({commit}, password){
        return axios
        .post(API_URL + 'changePassword',{
            password:  password.confirm
        },
        {
            headers:{
                Authorization: password.access_token
            }
        }
        )
        .then(
            commit('CHANGE_PASSWORD')
        )
    }
}
const mutations = {
    SEND_SUCCESS(state){
       state.sendSuccess = true
    },
    CHANGE_PASSWORD(state){
        state
    }
}
const getters = {

  
  
}
export default {
    state,
    actions,
    mutations,
    getters
}